"use client"

import { FC, useEffect, useRef } from "react"

import createGlobe, { COBEOptions } from "cobe"
import { useScroll, useSpring } from "react-spring"
import { useTheme } from "next-themes"

const toColor = (rgb: number[], brightness: number = 255) =>
  rgb.map(hue => hue / brightness) as [number, number, number]

type Props = {
  color?: [number, number, number]
  options?: Partial<COBEOptions>
  className?: string
  size?: number
}

export const Globe: FC<Props> = ({
  color = [255, 255, 255],
  size = 600,
  className,
  options
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef<number>(0)

  const { scrollYProgress } = useScroll()

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))

  useEffect(() => {
    let phi = 0
    let width = 0

    let brightness = 255
    let shouldDim = false

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth)

    window.addEventListener("resize", onResize)

    onResize()

    const globe = createGlobe(canvasRef.current!, {
      // Size and resolution
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      mapSamples: 16000,

      // Camera
      phi: 0,
      theta: 0.1,

      // Lighting
      dark: 1,
      diffuse: 2,
      opacity: 0.8,

      // Base color
      mapBrightness: 1.5,
      glowColor: toColor(color),
      baseColor: toColor(color),

      markerColor: toColor(color),
      markers: [], // Instantiate markers as empty

      onRender: state => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) phi += 0.005

        // Set the camera position
        state.phi = phi + r.get() + scrollYProgress.get() * 10
        state.height = width * 2
        state.width = width * 2

        if (brightness <= 127.5) shouldDim = false
        else if (brightness >= 306) shouldDim = true

        if (shouldDim) brightness -= 1
        else brightness += 0.5

        state.markerColor = toColor(color, brightness)
      },

      // Override any of the above
      ...options
    })

    // Fade in
    setTimeout(() => (canvasRef.current!.style.opacity = "1"))

    // Clean up on unmount
    return () => globe.destroy()
  }, [options])

  return (
    <div className={className}>
      <div
        className={"relative m-auto aspect-square w-full"}
        style={{ maxWidth: size, maxHeight: size }}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab opacity-0 [transition:opacity_1000ms_ease]"
          onPointerDown={e => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current
            canvasRef.current!.style.cursor = "grabbing"
          }}
          onPointerUp={() => {
            pointerInteracting.current = null
            canvasRef.current!.style.cursor = "grab"
          }}
          onPointerOut={() => {
            pointerInteracting.current = null
            canvasRef.current!.style.cursor = "grab"
          }}
          onMouseMove={e => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current
              pointerInteractionMovement.current = delta
              api.start({ r: delta / 200 })
            }
          }}
          onTouchMove={e => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current
              pointerInteractionMovement.current = delta
              api.start({ r: delta / 100 })
            }
          }}
        />
      </div>
    </div>
  )
}

export const ThemedGlobe: FC<
  Props & {
    colors?: {
      [key: string]: [number, number, number]
    }
  }
> = props => {
  const { resolvedTheme } = useTheme()

  const options = {
    dark: resolvedTheme === "dark" ? 1.1 : 0,
    ...props.options
  }

  return (
    <Globe
      {...props}
      options={options}
      color={props.colors?.[resolvedTheme!]}
    />
  )
}
