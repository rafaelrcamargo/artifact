"use client"

import { useScroll, animated } from "@react-spring/web"
import { ThemedGlobe } from "@/components/globe"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const Hero = () => {
  return (
    <section className="relative h-[240vh] w-full justify-center">
      <div className="sticky top-1/2 z-10 -translate-y-1/2">
        <Title />
      </div>

      <ThemedGlobe
        className="sticky top-1/2 -translate-y-1/2"
        colors={{ dark: [254, 123, 31], light: [46, 242, 128] }}
        options={{
          markers: [
            { location: [35.685, 139.7514], size: 0.35676 },
            { location: [40.6943, -73.9249], size: 0.19354922 },
            { location: [19.4424, -99.131], size: 0.19028 },
            { location: [19.017, 72.857], size: 0.18978 },
            { location: [-23.5587, -46.625], size: 0.18845 },
            { location: [28.67, 77.23], size: 0.15926 },
            { location: [31.2165, 121.4365], size: 0.14987 },
            { location: [22.495, 88.3247], size: 0.14787 },
            { location: [34.1139, -118.4068], size: 0.12815475 }
          ]
        }}
      />

      <div className="pointer-events-none absolute -left-8 top-[60vh] z-20 h-[180vh] w-screen bg-gradient-to-b from-transparent to-background to-70% backdrop-blur-xl [-webkit-mask:linear-gradient(180deg,transparent,black_50%)] md:-left-24" />
    </section>
  )
}

export default Hero

const Title = () => {
  const [theme, setTheme] = useState("dark")

  const { scrollYProgress } = useScroll()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setTheme(resolvedTheme!)
  }, [resolvedTheme])

  return (
    <h1 className="m-auto flex max-w-5xl flex-wrap justify-center gap-x-2 text-center text-3xl font-semibold [text-shadow:2px_2px_4px_hsl(var(--foreground)_/_30%)] dark:[text-shadow:0_0_8px_hsl(var(--background)_/_60%)] md:gap-x-4 md:text-6xl">
      {"Re-discover software as a service. Build a future proof app."
        .split(" ")
        .map((word, i) => (
          <animated.span
            key={word + i}
            className="leading-8 tracking-tighter duration-100 ease-linear md:leading-[3.75rem]"
            style={{
              color:
                theme === "dark"
                  ? `hsl(20,40%,${100 - (i + 1) * 1.5}%)`
                  : `hsl(80,10%,${(i + 1) * 2}%)`,
              transform: scrollYProgress.to(val => {
                if (val > 0.05) {
                  val -= 0.05

                  return `translate3d(0,-${
                    val * 14 * (word.length * 20) + (i + 1) * 10
                  }px,0)`
                }

                return `translate3d(0,-0px,0)`
              })
            }}
          >
            {word}
          </animated.span>
        ))}
    </h1>
  )
}
