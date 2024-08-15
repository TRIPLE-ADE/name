import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CollapsibleMenuItemProps } from "@/types/collapsible";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CollapsibleMenuItem: React.FC<CollapsibleMenuItemProps> = ({
  isOpen,
  onToggle,
  label,
  children,
  buttonProps,
}) => {
  return (
    <li className="mt-auto">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger
          className="text-base font-light flex items-center gap-3"
          asChild
        >
          <Button className={cn("justify-between", buttonProps?.className)}>
            <span className="flex items-center gap-2">
              {buttonProps?.children}
              {label}
            </span>
            <ChevronDownIcon
              className={cn(
                "h-6 w-6 transition-transform transform",
                isOpen && "rotate-180",
              )}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="relative ml-3 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 pb-2 data-[state=open]:animate-accordion-down data-[state=close]:animate-accordion-up">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};

export default CollapsibleMenuItem;
