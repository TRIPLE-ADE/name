import React, { useState } from "react";
import { Status, Fault } from "@/types/Map"; // Import Status type
// import { Button } from './ui/button';
import StatusDropdown from "./StatusDropdown";

interface DetailsPaneProps {
  selectedState: string | null;
  onFilterStatusChange: (status: Status | "All") => void;
  onFaultClick: (latitude: number, longitude: number) => void;
  faults: Fault[];
}

const DetailsPane: React.FC<DetailsPaneProps> = ({
  selectedState,
  onFilterStatusChange,
  onFaultClick,
  faults,
}) => {
  // const [currentLevel, setCurrentLevel] = useState<'Local Government' | 'State' | 'National'>('State');
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");

  // const handleLevelChange = (level: 'Local Government' | 'State' | 'National') => {
  //   setCurrentLevel(level);
  // };

  const handleStatusFilterChange = (status: Status | "All") => {
    setFilterStatus(status);
    onFilterStatusChange(status);
  };

  return (
    <div className="details-pane p-4 bg-gray-100">
      <h2 className="text-xl font-bold">Details for {selectedState}</h2>
      <div className="controls mb-4">
        {/* <Button onClick={() => handleLevelChange('Local Government')} className="mr-2">Local Government</Button>
        <Button onClick={() => handleLevelChange('State')} className="mr-2">State</Button>
        <Button onClick={() => handleLevelChange('National')} className="mr-2">National</Button> */}
        <StatusDropdown
          filterStatus={filterStatus}
          onStatusChange={handleStatusFilterChange}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Faults:</h3>
        <ul className="list-disc pl-4">
          {faults.map((fault, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() =>
                onFaultClick(
                  fault.fault_coordinates.latitude,
                  fault.fault_coordinates.longitude,
                )
              }
            >
              {fault.description}
            </li>
          ))}
        </ul>
      </div>
      {/* Display additional information based on currentLevel and filterStatus */}
      {/* Add your logic to fetch and display the relevant data */}
    </div>
  );
};

export default DetailsPane;
