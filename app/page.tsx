import { Suspense } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { KPICards } from "@/components/kpi-cards"
import { ChartsSection } from "@/components/charts-section"
import { TransactionsTable } from "@/components/transactions-table"
import { AIInsights } from "@/components/ai-insights"
import { FinanceHealthWidget } from "@/components/finance-health-widget"
import { CustomerTrendBreakdown } from "@/components/customer-trend-breakdown"
import { Footer } from "@/components/footer"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Cyber grid background */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      {/* Header with Sidebar Trigger */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-yellow-500/30 px-4 bg-black/80 backdrop-blur-xl">
        <SidebarTrigger className="-ml-1 text-yellow-400 hover:text-yellow-300" />
        <Separator orientation="vertical" className="mr-2 h-4 bg-yellow-500/30" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/" className="text-yellow-400 hover:text-yellow-300 font-mono">
                NEURAL DASHBOARD
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block text-yellow-600" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-yellow-300 font-mono">OVERVIEW</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <TopNavigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12 relative z-10">
        {/* Neural Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent blur-xl" />
          <div className="relative">
            <h1 className="text-6xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">NEURAL DASHBOARD</h1>
            <p className="text-yellow-600 font-mono text-lg tracking-wider">[ QUANTUM INTELLIGENCE MATRIX v3.0 ]</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-yellow-500">NEURAL_LINK_ESTABLISHED</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="text-yellow-400 font-mono animate-pulse">LOADING_NEURAL_DATA...</div>}>
          <KPICards />
        </Suspense>

        <Suspense
          fallback={<div className="text-yellow-400 font-mono animate-pulse">INITIALIZING_QUANTUM_CHARTS...</div>}
        >
          <ChartsSection />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AIInsights />
          </div>
          <div className="lg:col-span-1">
            <FinanceHealthWidget />
          </div>
        </div>

        <CustomerTrendBreakdown />
        <TransactionsTable />
      </main>

      <Footer />
    </div>
  )
}
