"use client"

import { useTheme } from "next-themes"
import { Button } from "@/ui/button"
import { Moon, Sun } from "lucide-react"

const ThemeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <Button
      className="fixed top-4 right-4 p-2"
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }}
    >
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
export default ThemeButton
