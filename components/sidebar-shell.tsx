"use client"

import type React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import dynamic from "next/dynamic"

const AppSidebar = dynamic(() => import("@/components/app-sidebar").then((m) => ({ default: m.AppSidebar })), {
  ssr: false,
  loading: () => <div className="w-64 h-screen bg-sidebar border-r" />,
})

export function SidebarShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">{children}</SidebarInset>
    </SidebarProvider>
  )
}
