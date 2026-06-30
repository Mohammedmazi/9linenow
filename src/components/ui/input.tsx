import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          `
          flex
          h-12
          w-full

          rounded-2xl

          border
          border-gray-300

          bg-white

          px-4

          text-base
          font-medium
          text-gray-900

          placeholder:text-gray-400

          shadow-sm

          transition-all
          duration-200

          hover:border-gray-400

          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100
          focus:outline-none

          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-400
          disabled:opacity-70

          autofill:bg-white
          `,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };