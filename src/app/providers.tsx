"use client"

import { type FC, type PropsWithChildren } from "react"

import { ThemeProvider, useTheme } from "next-themes"
import { Toaster } from "sonner"

export type Theme = "light" | "dark" | "system"

// Used for wrapping the entire app layout with the global providers needed
const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <>
      <Toaster
        richColors // Use rich colors
        closeButton // Show close button
        duration={3000} // Duration of the toast
        theme={theme as Theme} // Use the theme from next-themes
        toastOptions={{ style: { background: "hsl(var(--background))" } }}
      />
      {children}
    </>
  )
}

// Used for providers needed for the other providers, mainly for the theme
const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider disableTransitionOnChange attribute="class">
    <Providers>{children}</Providers>
  </ThemeProvider>
)

export { Wrapper as Providers }
