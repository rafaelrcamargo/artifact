"use client"

import { useRef } from "react"

import { useIsomorphicLayoutEffect } from "react-spring"
import { gsap } from "@/lib/gsap"

export default function MyComponent() {
  const productRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!productRef.current) return

    const timeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: productRef.current,
        pin: true,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      defaults: {
        ease: "power4.out"
      }
    })

    timeline
      .addLabel("start")
      .from(productRef.current, { opacity: 0 })
      .to(productRef.current, { opacity: 1 }, 1)

    return () => {
      timeline.revert()
    }
  }, [])

  return <div ref={productRef} className="absolute h-96 w-96 bg-slate-500" />
}
