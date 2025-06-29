"use client"

import type React from "react"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export function SidebarShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">{children}</SidebarInset>
    </SidebarProvider>
  )
}
