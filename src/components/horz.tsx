"use client"

import { useRef } from "react"

import { LazyMotion, domAnimation } from "framer-motion"
import { m, useTransform, useScroll } from "framer-motion"
import { Light } from "@/components/light"
import {
  Activity,
  Anchor,
  AtSign,
  Box,
  Coffee,
  Hash,
  Shield
} from "lucide-react"

export const Horz = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"])

  return (
    <LazyMotion strict features={domAnimation}>
      <Light container={targetRef} />

      <section ref={targetRef} className="relative z-20 h-[600vh] w-screen">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <m.div style={{ x }} className="absolute left-0 flex gap-8">
            {cards.map((card, i) => {
              return (
                <Card
                  i={i}
                  key={i}
                  card={card}
                  size={Math.floor(Math.random() * 500) + 400}
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
  const colors = ["#FF3021", "#FF5721", "#FF7E21", "#FFA421", "#FFBF21"]

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
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-14">
        <h2 className="text-4xl font-black text-foreground">{card.title}</h2>
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
  },
  {
    title: "The best of the best",
    description: "We only hire the best of the best.",
    icon: <Anchor />
  }
]
