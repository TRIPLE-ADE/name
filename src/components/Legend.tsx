import React from "react";

const Legend: React.FC = () => {
  return (
    <div className="py-2 my-2">
      <div>
        <h4 className="font-semibold">Legend</h4>
        <ul className="md:flex gap-4">
          <li>
            <span className="w-4 h-4 bg-blue-700 inline-block mr-2"></span>
            Data Point
          </li>
          <li>
            <span className="w-4 h-4 bg-green-500 inline-block mr-2"></span>
            Normal Status
          </li>
          <li>
            <span className="w-4 h-4 bg-yellow-300 inline-block mr-2"></span>
            Warning Status
          </li>
          <li>
            <span className="w-4 h-4 bg-red-500 inline-block mr-2"></span>
            Critical Status
          </li>
          <li>
            <span className="w-4 h-4 border-dashed border-gray-500 border inline-block mr-2"></span>
            Historical Data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Legend;
