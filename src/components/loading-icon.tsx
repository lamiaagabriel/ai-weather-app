"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const LoadingIcon = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return currentTheme === "dark" ? (
    <Sun className="w-20 h-20 animate-bounce text-yellow-500" />
  ) : (
    <Moon className="w-20 h-20 animate-bounce text-foreground" />
  )
}
export default LoadingIcon
