import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ReportsPageClient } from "@/components/reports-page-client"

const reports = [
  {
    id: 1,
    title: "MONTHLY REVENUE REPORT",
    description: "Comprehensive revenue analysis for the current month",
    type: "REVENUE",
    status: "READY",
    lastGenerated: "2024-01-15",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "CUSTOMER ANALYTICS REPORT",
    description: "Detailed customer behavior and segmentation analysis",
    type: "CUSTOMERS",
    status: "GENERATING",
    lastGenerated: "2024-01-14",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "FINANCIAL PERFORMANCE REPORT",
    description: "Complete financial health and performance metrics",
    type: "FINANCE",
    status: "READY",
    lastGenerated: "2024-01-13",
    size: "3.2 MB",
  },
  {
    id: 4,
    title: "GROWTH METRICS REPORT",
    description: "Growth trends and forecasting analysis",
    type: "GROWTH",
    status: "READY",
    lastGenerated: "2024-01-12",
    size: "1.5 MB",
  },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-2 glow-yellow-strong">NEURAL REPORTS</h1>
            <p className="text-yellow-600 font-mono">Quantum intelligence reporting system</p>
          </div>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">REPORTS</span>
        </div>

        <ReportsPageClient />
      </main>

      <Footer />
    </div>
  )
}
