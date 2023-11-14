"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"

export const Horz = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="absolute left-0 flex gap-8">
          {cards.map(card => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

type CardProps = {
  card: {
    title: string
    id: number
  }
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-muted-foreground"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black uppercase text-foreground">
          {card.title}
        </p>
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
