"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Sheet(
  props: React.ComponentProps<typeof SheetPrimitive.Root>
) {
  return <SheetPrimitive.Root {...props} />;
}

function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger {...props} />;
}

function SheetClose(
  props: React.ComponentProps<typeof SheetPrimitive.Close>
) {
  return <SheetPrimitive.Close {...props} />;
}

function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        `
        fixed
        inset-0
        z-50
        bg-black/40
        backdrop-blur-sm

        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0
        `,
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  side = "right",
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "bottom" | "left" | "right";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        data-side={side}
        className={cn(
          `
          fixed
          z-50
          flex
          flex-col

          bg-white
          text-gray-900

          border
          border-gray-200

          shadow-2xl

          transition-all
          duration-300

          data-[side=right]:top-0
          data-[side=right]:right-0
          data-[side=right]:h-full
          data-[side=right]:w-[340px]

          data-[side=left]:top-0
          data-[side=left]:left-0
          data-[side=left]:h-full
          data-[side=left]:w-[340px]

          data-[side=top]:top-0
          data-[side=top]:left-0
          data-[side=top]:w-full

          data-[side=bottom]:bottom-0
          data-[side=bottom]:left-0
          data-[side=bottom]:w-full

          data-[state=open]:animate-in
          data-[state=closed]:animate-out

          data-[side=right]:data-[state=open]:slide-in-from-right
          data-[side=right]:data-[state=closed]:slide-out-to-right

          data-[side=left]:data-[state=open]:slide-in-from-left
          data-[side=left]:data-[state=closed]:slide-out-to-left

          data-[side=top]:data-[state=open]:slide-in-from-top
          data-[side=bottom]:data-[state=open]:slide-in-from-bottom
          `,
          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
            >
              <X className="h-5 w-5" />
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-b border-gray-200 p-6",
        className
      )}
      {...props}
    />
  );
}

function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-auto border-t border-gray-200 p-6",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn(
        "text-2xl font-bold text-gray-900",
        className
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={cn(
        "mt-2 leading-7 text-gray-600",
        className
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};