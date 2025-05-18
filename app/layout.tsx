import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { V31ThemeProvider } from "@/components/v31-theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "From The Trenches | Crypto Intelligence Platform",
  description:
    "AI-powered signals that track smart money movements, giving you the intelligence advantage in crypto trading.",
  keywords: "crypto, trading, signals, smart money, intelligence, AI, blockchain, from the trenches, FTT",
  authors: [{ name: "From The Trenches Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fromthetrenches.io",
    title: "From The Trenches | Crypto Intelligence Platform",
    description:
      "AI-powered signals that track smart money movements, giving you the intelligence advantage in crypto trading.",
    siteName: "From The Trenches",
  },
  twitter: {
    card: "summary_large_image",
    title: "From The Trenches | Crypto Intelligence Platform",
    description:
      "AI-powered signals that track smart money movements, giving you the intelligence advantage in crypto trading.",
    creator: "@fttrenches_",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <V31ThemeProvider defaultTheme="dark">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </V31ThemeProvider>
      </body>
    </html>
  )
}
