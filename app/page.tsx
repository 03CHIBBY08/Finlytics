import { TopNavigation } from "@/components/top-navigation"
import { KPICards } from "@/components/kpi-cards"
import { ChartsSection } from "@/components/charts-section"
import { AIInsights } from "@/components/ai-insights"
import { FinanceHealthWidget } from "@/components/finance-health-widget"
import { CustomerTrendBreakdown } from "@/components/customer-trend-breakdown"
import { Footer } from "@/components/footer"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold hologram-text">NEURAL DASHBOARD</h1>
          <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
            Advanced AI-powered financial analytics and real-time business intelligence
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full neural-pulse"></div>
              <span className="text-green-400">SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full neural-pulse"></div>
              <span className="text-yellow-400">AI ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full neural-pulse"></div>
              <span className="text-blue-400">DATA STREAMING</span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            <ChartsSection />
          </div>

          {/* Right Column - Widgets */}
          <div className="space-y-8">
            <AIInsights />
            <FinanceHealthWidget />
          </div>
        </div>

        {/* Customer Analytics */}
        <CustomerTrendBreakdown />
      </main>

      <Footer />
    </div>
  )
}
