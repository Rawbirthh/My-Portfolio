import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IT Student Portfolio",
  description: "A modern portfolio website for an IT student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
