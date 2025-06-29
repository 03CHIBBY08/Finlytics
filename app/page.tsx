import { KPICards } from "@/components/kpi-cards"
import { ChartsSection } from "@/components/charts-section"
import { TopNavigation } from "@/components/top-navigation"
import { AIInsights } from "@/components/ai-insights"
import { FinanceHealthWidget } from "@/components/finance-health-widget"
import { CustomerTrendBreakdown } from "@/components/customer-trend-breakdown"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">NEURAL DASHBOARD</h1>
          <p className="text-yellow-600 font-mono">Real-time business intelligence powered by quantum analytics</p>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            <ChartsSection />
            <CustomerTrendBreakdown />
          </div>

          {/* Right Column - Widgets */}
          <div className="space-y-8">
            <FinanceHealthWidget />
            <AIInsights />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
