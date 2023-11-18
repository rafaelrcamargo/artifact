"use client"

import { useScroll, animated } from "react-spring"

import { useDevice } from "@/hooks"

export const Light = ({ container }: any) => {
  const { scrollYProgress } = useScroll({ container: container.current })

  const { isMobile } = useDevice()
  const factor = isMobile ? 0.5 : 1

  const scaleRange = (range: number[]) => range.map(x => x * factor)

  const rg = [
    "radial-gradient(black 0%,transparent 40%)",
    "radial-gradient(black 10%,transparent 70%)"
  ]

  const g = ["grayscale(0)", "grayscale(1)"]
  const s = ["scale(1)", "scale(1.5)"]

  return (
    <animated.div
      className="sticky left-0 z-10 flex h-[80vh] w-full transform-gpu opacity-100"
      style={{
        WebkitMaskImage: scrollYProgress.to(scaleRange([0.2, 0.3, 0.7, 0.75]), [
          rg[0],
          rg[1],
          rg[1],
          rg[0]
        ]),
        filter: scrollYProgress.to(scaleRange([0.0, 0.2, 0.3, 0.65, 0.7]), [
          g[1],
          g[1],
          g[0],
          g[0],
          g[1]
        ]),
        transform: scrollYProgress.to(scaleRange([0.0, 0.2, 0.3, 0.65, 0.75]), [
          s[0],
          s[0],
          s[1],
          s[1],
          s[0]
        ]),
        opacity: scrollYProgress.to(
          scaleRange([0.0, 0.3, 0.65, 1]),
          [0, 1, 1, 0]
        ),
        top: scrollYProgress.to(scaleRange([0.0, 0.75, 0.85]), [
          "-23vh",
          "-23vh",
          "-100vh"
        ])
      }}
    >
      <div className="ml-1 h-[80vh] w-7/12 bg-[conic-gradient(from_90deg_at_80%_50%,hsl(var(--accent)),hsl(var(--background)))]" />
      <div className="-ml-1 h-[80vh] w-7/12 bg-[conic-gradient(from_270deg_at_20%_50%,hsl(var(--background)),hsl(var(--accent)))]" />
    </animated.div>
  )
}
