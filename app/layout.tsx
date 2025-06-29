import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finlytics - Neural Business Intelligence",
  description: "Professional Sales & Finance Dashboard for SaaS FinTech – Where numbers meet next-gen intelligence",
  keywords: "fintech, dashboard, analytics, business intelligence, saas, neural, quantum",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
