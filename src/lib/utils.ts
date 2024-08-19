import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const buttonVariants = cva(
//   "flex items-center whitespace-nowrap text-white text-base font-normal transition-colors",
//   {
//     variants: {
//       variant: {
//         default: "hover:bg-neutral-700/70",
//         primary: "bg-neutral-700 border-l border-l-4 border-l-indigo-400",
//         secondary: "bg-indigo-400 hover:bg-indigo-300",
//       },
//       size: {
//         default: "px-[30px] py-[15px] w-full",
//         lg: "rounded-[44px] px-[44px] py-[14px]",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-700/70",
        primary: "bg-neutral-700 border-l border-l-4 border-l-indigo-400",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-indigo-400 hover:bg-indigo-300 text-secondary-foreground shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[30px] py-[15px] w-full",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "rounded-[44px] px-[44px] py-[14px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
