import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  "flex items-center whitespace-nowrap text-white text-base font-normal transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-700/70",
        primary: "bg-neutral-700 border-l border-l-4 border-l-indigo-400",
        secondary: "bg-indigo-400 hover:bg-indigo-300",
      },
      size: {
        default: "px-[30px] py-[15px] w-full",
        lg: "rounded-[44px] px-[44px] py-[14px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
