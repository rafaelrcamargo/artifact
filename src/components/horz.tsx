"use client"

import { useRef } from "react"
import { LazyMotion, domAnimation } from "framer-motion"
import { m, useTransform, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const Horz = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"])

  return (
    <LazyMotion strict features={domAnimation}>
      <section
        ref={targetRef}
        className="relative h-[400vh] w-screen bg-background"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <m.div style={{ x }} className="absolute left-0 flex gap-8">
            {cards.map(card => {
              return (
                <Card
                  card={card}
                  size={Math.floor(Math.random() * 500) + 400}
                  key={card.id}
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
  size: number
  card: {
    title: string
    id: number
  }
}

const Card = ({ card, size }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] overflow-hidden rounded-xl border border-muted bg-background/50 shadow-[0_-20px_80px_-20px_#ffffff1f_inset] backdrop-blur-sm"
      style={{ width: size }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-14">
        <h2 className="text-4xl font-black text-foreground">{card.title}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>Read more →</div>
      </div>
    </div>
  )
}

const cards = [
  {
    title: "Title 1",
    id: 1
  },
  {
    title: "Title 2",
    id: 2
  },
  {
    title: "Title 3",
    id: 3
  },
  {
    title: "Title 4",
    id: 4
  },
  {
    title: "Title 5",
    id: 5
  },
  {
    title: "Title 6",
    id: 6
  },
  {
    title: "Title 7",
    id: 7
  }
]
