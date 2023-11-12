import { FC, PropsWithChildren } from "react"

import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import { Providers } from "@/app/providers"
import { Header } from "@/components/header"
import { Lenis } from "@/components/lenis"
import { cn } from "@/lib/utils"

import "../styles/globals.css"

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn("min-h-screen font-sans antialiased", GeistSans.variable)}
    >
      <Providers>
        <Header />
        <Lenis>{children}</Lenis>
      </Providers>
    </body>
  </html>
)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default Layout
