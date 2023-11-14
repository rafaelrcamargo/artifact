import { FC, PropsWithChildren } from "react"
import type { Metadata } from "next"

import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google"

import { Providers } from "@/app/providers"
import { Header } from "@/components/header"
import { Lenis } from "@/components/lenis"
import { cn } from "@/lib/utils"

import "../styles/globals.css"

const Serif = IBM_Plex_Serif({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})

const Sans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap"
})

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        "min-h-screen overflow-x-hidden font-sans antialiased",
        Serif.variable,
        Sans.variable
      )}
    >
      <Providers>
        <Header />
        <Lenis>{children}</Lenis>
        <div className="overlay pointer-events-none z-40" />
      </Providers>
    </body>
  </html>
)

export const metadata: Metadata = {
  title: "Re-discover SASS | Artifact",
  description: "Re-discover software as a service. Build a future proof app.",
  robots: { follow: true, index: true },
  authors: {
    name: "Rafael R. Camargo",
    url: "https://cmrg.me"
  }
}

export default Layout
