// src/components/Pipeline.tsx
import React, { useState } from 'react';
import { PipelineData } from '../types/Pipeline';

interface PipelinePoint {
  x: number;
  y: number;
}

interface PipelineProps {
  pipelines: PipelineData[];
}

interface StateCondition {
  [state: string]: 'green' | 'yellow' | 'red';
}

const Pipeline: React.FC<PipelineProps> = ({ pipelines }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Define colors for pipelines and state circles
  const pipelineColors: Record<'green' | 'yellow' | 'red', string> = {
    green: '#38a169',
    yellow: '#ecc94b',
    red: '#f56565',
  };

  const stateColors: Record<'green' | 'yellow' | 'red', string> = {
    green: '#2f855a',
    yellow: '#d69e2e',
    red: '#e53e3e',
  };

  // Function to generate state coordinates dynamically in a grid-like layout
  const generateStateCoordinates = (states: string[]): Record<string, PipelinePoint> => {
    const spacing = 200; // Space between states
    const startX = 50; // Starting x coordinate
    const startY = 50; // Starting y coordinate
    const cols = 4; // Number of columns
    // const rows = Math.ceil(states.length / cols);

    return states.reduce((coords, state, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      coords[state] = { x: startX + col * spacing, y: startY + row * spacing };
      return coords;
    }, {} as Record<string, PipelinePoint>);
  };

  // Get unique state names from pipelines
  const uniqueStates = Array.from(new Set([
    ...pipelines.map(pipeline => pipeline.from),
    ...pipelines.map(pipeline => pipeline.to),
  ]));

  // Generate state coordinates
  const stateCoordinates = generateStateCoordinates(uniqueStates);

  // Define state conditions
  const stateConditions: StateCondition = {
    'State A': 'green',
    'State B': 'yellow',
    'State C': 'red',
    'State D': 'green',
    'State E': 'yellow',
    'State F': 'green',
    'State G': 'green',
    'State H': 'yellow',
    'State I': 'green',
    'State J': 'green',
    'State K': 'yellow',
    'State L': 'green',
  };

  // Function to generate path data with minimal bending and rectangular-like wrapping
const getPath = (from: PipelinePoint, to: PipelinePoint) => {
  const x1 = from.x;
  const y1 = from.y;
  const x2 = to.x;
  const y2 = to.y;

  // Define bend height and wrap threshold
  const bendHeight = 50; // Height of the slight bend
  const wrapThreshold = 150; // Threshold to determine wrapping

  let path = `M${x1},${y1}`;

  // Determine if the path needs to bend
  if (Math.abs(x2 - x1) > wrapThreshold || Math.abs(y2 - y1) > wrapThreshold) {
    // If wrapping is needed, create a minimal rectangular-like path
    if (x2 > x1) {
      path += ` L${x1},${y1 + bendHeight}`; // vertical bend
      path += ` L${x2},${y1 + bendHeight}`; // horizontal bend
    } else {
      path += ` L${x1},${y2}`; // vertical bend directly to target
      path += ` L${x2},${y2}`; // horizontal line to target
    }
  } else {
    // Direct line if within the wrap threshold
    path += ` L${x2},${y2}`;
  }

  return path;
};


  const handleStateClick = (state: string) => {
    setSelectedState(state);
    // Implement logic to show local government level details
    console.log(`State clicked: ${state}`);
  };

  return (
    <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>
      <svg width="2000px" height="1000px" viewBox="0 0 2000 1000">
        {/* Render pipelines */}
        {pipelines.map((pipeline, index) => {
          const fromPoint = stateCoordinates[pipeline.from];
          const toPoint = stateCoordinates[pipeline.to];
          return (
            fromPoint && toPoint && (
              <path
                key={index}
                d={getPath(fromPoint, toPoint)}
                stroke={pipelineColors[pipeline.condition]}
                strokeWidth="8"
                fill="none"
              />
            )
          );
        })}
        {/* Render state indicators */}
        {Object.entries(stateCoordinates).map(([state, { x, y }]) => (
          <React.Fragment key={state}>
            <circle
              cx={x}
              cy={y}
              r="10"
              stroke="black"
              strokeWidth="2"
              fill={stateColors[stateConditions[state]] || 'gray'}
              onClick={() => handleStateClick(state)}
              style={{ cursor: 'pointer' }}
            />
            <text x={x} y={y - 15} textAnchor="middle" fontSize="12" fill="black">
              {state}
            </text>
          </React.Fragment>
        ))}
      </svg>
      {selectedState && (
        <div className="details">
          <h2>Details for {selectedState}</h2>
          {/* Render local government level details here */}
          {/* You can fetch or display more information about the selected state */}
        </div>
      )}
    </div>
  );
};

export default Pipeline;
