import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "blue" | "green" | "yellow"; // Customize variants as needed
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "red",
  className,
}) => {
  const badgeClasses = clsx(
    "rounded-full text-white font-bold",
    {
      "bg-red-600": variant === "red",
      "bg-blue-600": variant === "blue",
      "bg-green-600": variant === "green",
      "bg-yellow-600": variant === "yellow",
    },
    className,
  );

  return <span className={badgeClasses}>{children}</span>;
};
