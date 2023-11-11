import { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children
}) => (
  <div className={cn("drop-shadow-lg", className)}>
    <h1
      className={cn(
        "bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent"
      )}
    >
      {children}
    </h1>
  </div>
);
