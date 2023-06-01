"use client"
import { ThemeProvider as Provider } from "next-themes"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </Provider>
  )
}
