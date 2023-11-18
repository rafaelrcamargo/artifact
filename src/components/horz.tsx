"use client"

import { useRef } from "react"

import { Activity, Anchor, AtSign, Coffee, Hash, Shield } from "lucide-react"
import { m, useTransform, useScroll } from "framer-motion"
import { LazyMotion, domAnimation } from "framer-motion"

import { Light } from "@/components/light"
import { useDevice } from "@/hooks"
import { useTheme } from "next-themes"

export const Horz = () => {
  const { isMobile } = useDevice()
  const targetRef = useRef(null)

  const factor = isMobile ? 200 : 400

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"])

  return (
    <LazyMotion strict features={domAnimation}>
      <Light container={targetRef} />

      <section
        ref={targetRef}
        className="relative z-20 h-[400vh] w-screen md:h-[600vh]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <m.div style={{ x }} className="absolute left-32 flex gap-8">
            {cards.map((card, i) => {
              return (
                <Card
                  i={i}
                  key={i}
                  card={card}
                  size={Math.floor(Math.random() * 500) + factor}
                />
              )
            })}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}

type CardProps = {
  i: number
  size: number
  card: {
    title: string
    description: string
    icon: JSX.Element
  }
}

const Card = ({ card, size, i }: CardProps) => {
  const { resolvedTheme } = useTheme()

  const colors =
    resolvedTheme === "dark"
      ? ["#FF551F", "#FFA31F", "#FE7C1F", "#FF2E1F", "#FFBE1F"]
      : ["#2EF23D", "#2EF2C2", "#2EF280", "#6EF22E", "#2EE1F2"]

  return (
    <div
      className="group relative h-[450px] overflow-hidden rounded-xl border border-muted bg-background/60 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] backdrop-blur-sm duration-150 hover:shadow-[0_-10px_80px_-10px_#ffffff1f_inset]"
      style={{ width: size }}
    >
      <div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full fill-muted-foreground opacity-20 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] group-hover:opacity-50"
        >
          <defs>
            <pattern
              id="dots"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <circle id="pattern" cx="1" cy="1" r="1"></circle>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#dots)"
          ></rect>
        </svg>
      </div>
      <div
        className="absolute -right-24 -top-24 grayscale group-hover:grayscale-0 [&>svg:last-child()]:blur-xl [&>svg]:h-96 [&>svg]:w-96 [&>svg]:opacity-50 [&>svg]:duration-150 [&>svg]:group-hover:opacity-100"
        style={{
          color: colors[i], // Get a random color from the array
          rotate: `${i % 2 === 1 ? "" : "-"}${(i + 1) * 4}deg`
        }}
      >
        {card.icon}
      </div>
      <div
        className="absolute -right-24 -top-24 opacity-0 blur-2xl duration-150 group-hover:opacity-50 [&>svg:last-child()]:blur-2xl [&>svg]:h-96 [&>svg]:w-96"
        style={{
          color: colors[i], // Get a random color from the array
          rotate: `${i % 2 === 1 ? "" : "-"}${(i + 1) * 4}deg`
        }}
      >
        {card.icon}
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-14 [text-shadow:0_0_8px_hsl(var(--background)_/_80%)]">
        <h2 className="-mb-1 text-xl font-black text-foreground md:text-4xl">
          {card.title}
        </h2>
        <p>{card.description}</p>
        <div className="max-h-[0px] overflow-hidden underline-offset-4 duration-150 hover:underline group-hover:max-h-8">
          Read more →
        </div>
      </div>
    </div>
  )
}

const cards = [
  {
    title: "24/7 Support",
    description: "With our support team, you'll never be alone.",
    icon: <Activity />
  },
  {
    title: "As secure as it gets",
    description: "We take security very seriously.",
    icon: <Shield />
  },
  {
    title: "Documentation for days of reading",
    description: "We have a lot of documentation, you'll never be lost.",
    icon: <Coffee />
  },
  {
    title: "Blame the responsible",
    description: "At the end of the day, we're all humans.",
    icon: <AtSign />
  },
  {
    title: "Tell everyone about it",
    description: "Just kidding, we don't have a referral program.",
    icon: <Hash />
  }
]
