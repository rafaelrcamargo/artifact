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
        closeButton
        toastOptions={{
          style: {
            background: theme === "dark" ? "#333" : "#fff"
          }
        }}
        theme={theme as Theme}
        duration={3000}
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
