"use client"

import { useEffect } from "react"
import { useScroll } from "react-spring"
import { animated } from "react-spring"

export const Light = ({ container }: any) => {
  const { scrollYProgress } = useScroll({ container: container.current })

  const ranges = [0.0, 0.2, 0.3, 0.65, 0.75]
  const g = ["grayscale(0)", "grayscale(1)"]
  const s = ["scale(1)", "scale(1.5)", "scale(2)"]

  return (
    <animated.div
      className="sticky left-0 z-10 flex h-96 w-full transform-gpu opacity-100 [-webkit-mask-image:radial-gradient(black_10%,transparent_70%)]"
      style={{
        filter: scrollYProgress.to(ranges, [g[1], g[1], g[0], g[0], g[1]]),
        transform: scrollYProgress.to(ranges, [s[0], s[0], s[1], s[1], s[2]]),
        opacity: scrollYProgress.to([0.0, 0.3, 0.65, 1], [0, 1, 1, 0]),
        top: scrollYProgress.to(
          [0.0, 0.2, 0.3, 0.65, 0.8],
          [-25, -25, -25, -25, -500]
        )
      }}
    >
      <div className="h-96 w-1/2 bg-[conic-gradient(from_90deg_at_80%_50%,hsl(var(--accent)),hsl(var(--background)))]" />
      <div className="-ml-1 h-96 w-1/2 bg-[conic-gradient(from_270deg_at_20%_50%,hsl(var(--background)),hsl(var(--accent)))]" />
    </animated.div>
  )
}
