import React, { ReactNode } from "react";
import { Profile } from "./Profile";
import Search from "./ui/search";
import { Notification } from "./Notification";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="sm:flex items-center justify-between py-8 relative">
      <h1 className="sm:text-[40px] mb-3 sm:mb-0 text-3xl font-medium text-green-900">
        {children}
      </h1>
      <div className="flex items-center">
        <Search />
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
