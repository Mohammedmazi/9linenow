import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        `
        flex
        w-full
        min-h-40

        rounded-2xl

        border
        border-gray-200

        bg-white

        px-4
        py-3

        text-base
        text-gray-900

        placeholder:text-gray-400

        shadow-sm

        transition-all
        duration-300

        hover:border-emerald-300
        hover:shadow-md

        focus:border-emerald-500
        focus:ring-4
        focus:ring-emerald-100
        focus:outline-none

        resize-y

        disabled:cursor-not-allowed
        disabled:bg-gray-100
        disabled:text-gray-400
        disabled:opacity-70
        `,
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };