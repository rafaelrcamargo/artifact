import { useMemo } from "react"
import { useWindowSize } from "usehooks-ts"

export const useWindowFactor = (
  coefficient = 5,
  round = false,
  invert = false
) => {
  const { width, height } = useWindowSize()

  const factor = () => {
    if (invert) {
      const factor = (width / height) * coefficient
      return round ? Math.round(factor) : factor
    }

    const factor = (height / width) * coefficient
    return round ? Math.round(factor) : factor
  }

  return useMemo(factor, [width, height])
}

export const useDevice = () => {
  const { width } = useWindowSize()

  return {
    isMobile: width < 768,
    isTablet: width < 1024,
    isDesktop: width >= 1024
  }
}
