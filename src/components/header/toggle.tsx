"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { Laptop, Moon, Sun } from "lucide-react"

export const Toggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return

  return (
    <>
      <Select value={theme} onValueChange={e => setTheme(e)}>
        <SelectTrigger
          aria-label="Toggle theme"
          className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-foreground/10 bg-transparent"
        >
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <Sun className="w-4 fill-muted-foreground/20 stroke-muted-foreground" />
          </SelectItem>
          <SelectItem value="dark">
            <Moon className="w-4 fill-muted-foreground/20 stroke-muted-foreground" />
          </SelectItem>
          <SelectItem value="system">
            <Laptop className="w-4 fill-muted-foreground/20 stroke-muted-foreground" />
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
