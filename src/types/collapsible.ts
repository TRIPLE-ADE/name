import { Button } from "@/components/ui/button";

export interface MenuItem {
  path?: string;
  label: string;
  submenu?: MenuItem[];
}

export interface CollapsibleMenuItemProps extends MenuItem {
  onToggle: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  buttonProps?: React.ComponentProps<typeof Button>;
}
