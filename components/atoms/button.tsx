"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "blue" | "gradient" | "outline" | "text";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode; // ✅ tambah ini
};

export default function Button({
  children,
  variant = "gold",
  className,
  type = "button",
  onClick,
  disabled,
  icon,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const textBase =
    "inline-flex items-center gap-2 text-sm md:text-base font-semibold transition-colors duration-200 bg-transparent p-0 m-0 shadow-none focus-visible:outline-none";

  const variants: Record<Variant, string> = {
    gold: "bg-yellow-400 text-blue-900 hover:bg-yellow-500 focus-visible:ring-yellow-400",
    blue: "bg-blue-900 text-white hover:opacity-90  focus-visible:ring-blue-900 ",
    gradient:
      "bg-[linear-gradient(45deg,#001D4C,#00509D)] text-white hover:opacity-90 focus-visible:ring-blue-700focus-visible:ring-blue-700",
    outline:
      "border border-gray-800 text-gray-800 bg-transparent hover:bg-gray-900 hover:text-white focus-visible:ring-gray-800",
    text:
      "text-black hover:text-blue-700 focus-visible:ring-blue-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        variant === "text" ? textBase : baseStyle,
        variants[variant],
        className
      )}
    >
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}