import { FC, PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children
}) => (
  <div
    className={cn(
      "[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.25))] dark:[filter:drop-shadow(0_0_10px_hsl(var(--background)))]",
      className
    )}
  >
    <h1
      className={cn(
        "pointer-events-none bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent"
      )}
    >
      {children}
    </h1>
  </div>
)
