import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"

// ⬇️ Sidebar code is browser-only.  We map the named export to `default`
// so `dynamic()` receives a real React component.
const SidebarShell = dynamic(
  () =>
    import("@/components/sidebar-shell").then((m) => ({
      default: m.SidebarShell,
    })),
  { ssr: false },
)

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
      <body className={inter.className}>
        <SidebarShell>{children}</SidebarShell>
      </body>
    </html>
  )
}
