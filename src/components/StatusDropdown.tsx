import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Status } from "@/types/Map";

const StatusDropdown: React.FC<{
  filterStatus: Status | "All";
  onStatusChange: (status: Status | "All") => void;
}> = ({ filterStatus, onStatusChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between w-48 py-2"
        >
          {filterStatus === "All"
            ? "All Statuses"
            : filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => onStatusChange("All")}>
            All Statuses
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onStatusChange("normal")}>
            Normal
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onStatusChange("warning")}>
            Warning
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onStatusChange("critical")}>
            Critical
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
