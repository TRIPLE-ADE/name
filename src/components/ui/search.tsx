import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search: React.FC = () => {
  return (
    <div className="flex items-center bg-neutral-800 p-2 rounded-md">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none w-full"
      />
    </div>
  );
};

export default Search;
