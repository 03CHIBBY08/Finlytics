"use client"

import type React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import dynamic from "next/dynamic"

/**
 * AppSidebar contains Radix/shadcn code that must never run on
 * the server.  We lazy-load it with `ssr: false`, but the provider
 * is imported statically so `useSidebar()` gets the *same* context
 * instance.
 */
const AppSidebar = dynamic(() => import("@/components/app-sidebar").then((m) => m.AppSidebar), { ssr: false })

export function SidebarShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">{children}</SidebarInset>
    </SidebarProvider>
  )
}
