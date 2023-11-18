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

import { Bell, Laptop, Moon, Sun } from "lucide-react"
import { toast } from "sonner"

export const Toggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return

  const random = () => Math.floor(Math.random() * 6) + 1

  const choose = () => {
    switch (random()) {
      case 1:
        return toast.info("My first info toast")
      case 2:
        return toast.success("My first success toast")
      case 3:
        return toast.warning("My first warning toast")
      case 4:
        return toast.error("My first error toast")
      case 5:
        return toast.loading("My first loading toast")
      case 6:
        return toast("My first toast")
    }
  }

  return (
    <div className="flex gap-2">
      <button
        className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-sm"
        onClick={choose} // Generate a random toast
      >
        <Bell className="w-4 opacity-50" />
      </button>

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
    </div>
  )
}
