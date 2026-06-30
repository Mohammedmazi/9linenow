import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-7xl
        px-6
        sm:px-8
        lg:px-10
        xl:px-12
      "
    >
      {children}
    </div>
  );
}