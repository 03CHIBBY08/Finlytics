import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { TransactionsTable } from "@/components/transactions-table"
import Link from "next/link"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">TRANSACTION MATRIX</h1>
          <p className="text-yellow-600 font-mono">Neural transaction processing system</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">TRANSACTIONS</span>
        </div>

        <TransactionsTable />
      </main>

      <Footer />
    </div>
  )
}
