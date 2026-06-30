import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    gap-1
    rounded-full
    border
    px-3
    py-1
    text-xs
    font-semibold
    whitespace-nowrap
    transition-all
    duration-200
    select-none
    [&>svg]:pointer-events-none
    [&>svg]:size-3
  `,
  {
    variants: {
      variant: {
        default: `
          border-emerald-600
          bg-emerald-600
          text-white
          hover:bg-emerald-700
          hover:border-emerald-700
        `,

        secondary: `
          border-emerald-200
          bg-emerald-50
          text-emerald-700
          hover:bg-emerald-100
        `,

        outline: `
          border-gray-300
          bg-white
          text-gray-700
          hover:border-emerald-400
          hover:text-emerald-700
        `,

        destructive: `
          border-red-200
          bg-red-50
          text-red-700
          hover:bg-red-100
        `,

        ghost: `
          border-transparent
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        `,

        link: `
          border-transparent
          bg-transparent
          px-0
          text-emerald-600
          hover:text-emerald-700
          hover:underline
        `,
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };