import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    rounded-full

    font-semibold

    transition-all
    duration-300

    cursor-pointer
    select-none

    outline-none

    disabled:pointer-events-none
    disabled:opacity-50

    focus-visible:outline-none
    focus-visible:ring-4
    focus-visible:ring-emerald-200

    active:scale-[0.98]

    [&_svg]:pointer-events-none
    [&_svg]:size-4
    [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: `
          bg-emerald-600
          text-white
          shadow-md

          hover:bg-emerald-700
          hover:-translate-y-0.5
          hover:shadow-xl
        `,

        outline: `
          border
          border-gray-300
          bg-white
          text-gray-800
          shadow-sm

          hover:border-emerald-500
          hover:bg-emerald-50
          hover:text-emerald-700
          hover:shadow-md
        `,

        secondary: `
          border
          border-emerald-200
          bg-emerald-50
          text-emerald-700

          hover:bg-emerald-100
        `,

        ghost: `
          bg-transparent
          text-gray-700

          hover:bg-gray-100
          hover:text-gray-900
        `,

        destructive: `
          bg-red-600
          text-white

          hover:bg-red-700
        `,

        link: `
          bg-transparent
          p-0
          text-emerald-600

          hover:text-emerald-700
          hover:underline
          underline-offset-4
        `,
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-10 px-5 text-sm",

        default: "h-11 px-6 text-sm",

        lg: "h-14 px-8 text-base",

        icon: "h-11 w-11 p-0",

        "icon-xs": "h-8 w-8 p-0",

        "icon-sm": "h-10 w-10 p-0",

        "icon-lg": "h-14 w-14 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };