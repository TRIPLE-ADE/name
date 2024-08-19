import React, { ReactNode } from "react";
import { Profile } from "./Profile";
import Search from "./ui/search";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="sm:flex items-center justify-between py-8 relative">
      <h1 className="sm:text-[40px] mb-3 sm:mb-0 text-3xl font-medium text-neutral-900">
        {children}
      </h1>
      <div className="flex items-center">
        <Search />
        <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
