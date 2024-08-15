import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "@/constant/data.ts";
import { MenuItem } from "@/types/collapsible";
import CollapsibleMenuItem from "./custom/CollapsibleMenuItem";
import { Button } from "./ui/button";
import useToggleState from "@/hooks/useToggleState";
import useDisclosure from "@/hooks/useDisclosure";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

/**
 * Sidebar component that displays a collapsible menu with menu items and a settings button.
 */
const Sidebar: React.FC = () => {
  const { openStep: openMenuItem, handleToggle: handleMenuItemClick } =
    useToggleState();
  const { isOpen: isSidebarOpen, toggle: handleHamburgerClick } =
    useDisclosure();
  const { pathname } = useLocation();

  return (
    <>
      {/* Hamburger button visible only on small screens */}
      <div
        className={cn(
          "md:hidden p-4 fixed z-20 w-full",
          !isSidebarOpen && "bg-slate-50",
        )}
      >
        <button onClick={handleHamburgerClick}>
          {isSidebarOpen ? (
            <Cross1Icon className="h-6 w-6 text-white" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* <div className="w-[289px] py-[60px] top-0 h-full bg-neutral-900 text-white fixed flex flex-col overflow-y-auto side-scrollbar -left-full sm:left-0">
       */}
      <div
        className={cn(
          "w-[289px] z-10 py-[60px] top-0 h-full bg-neutral-900 text-white fixed flex flex-col overflow-y-auto side-scrollbar transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        <Link to="/" className="text-[40px] font-bold pb-[60px] pl-[30px]">
          pipeline-monitoring
        </Link>
        <ul className="flex flex-col gap-[10px] mb-10">
          {/* Render menu items */}
          {menuItems.map((menuItem: MenuItem, index: number) =>
            menuItem.submenu ? (
              // Render collapsible menu item if it has a submenu
              <CollapsibleMenuItem
                key={index}
                label={menuItem.label}
                isOpen={index === openMenuItem}
                onToggle={() => handleMenuItemClick(index)}
              >
                {/* Render submenu items as children */}
                {menuItem.submenu?.map((subMenuItem, subIndex) => (
                  <Button
                    asChild
                    className={
                      pathname === subMenuItem.path ? "font-bold" : "font-light"
                    }
                    key={subIndex}
                  >
                    <Link to={subMenuItem.path!}>{subMenuItem.label}</Link>
                  </Button>
                ))}
              </CollapsibleMenuItem>
            ) : (
              // Render menu item if it does not have a submenu
              <li key={index}>
                <Button
                  variant={pathname === menuItem.path ? "primary" : "default"}
                  className="justify-between"
                >
                  <Link to={menuItem.path!}>{menuItem.label}</Link>
                  <span className="py-[5px] px-2.5 bg-white rounded text-sm text-black font-normal">
                    1/6
                  </span>
                </Button>
              </li>
            ),
          )}
        </ul>
        <Button
          asChild
          className="mt-auto"
          variant={pathname === "/settings" ? "primary" : "default"}
        >
          <Link to="/settings">Settings</Link>
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
