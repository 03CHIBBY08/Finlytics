import { KPICards } from "@/components/kpi-cards"
import { ChartsSection } from "@/components/charts-section"
import { TopNavigation } from "@/components/top-navigation"
import { AIInsights } from "@/components/ai-insights"
import { FinanceHealthWidget } from "@/components/finance-health-widget"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <TopNavigation />

      <main className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white font-mono">NEURAL DASHBOARD</h1>
            <p className="text-slate-400 font-mono">Real-time business intelligence powered by quantum analytics</p>
          </div>
          <FinanceHealthWidget />
        </div>

        <KPICards />
        <AIInsights />
        <ChartsSection />
      </main>
    </div>
  )
}
