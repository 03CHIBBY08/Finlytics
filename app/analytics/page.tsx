import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { TrendingUp, Activity, Target, Zap } from "lucide-react"
import Link from "next/link"

const analyticsData = [
  { month: "JAN", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "FEB", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "MAR", revenue: 48000, expenses: 33000, profit: 15000 },
  { month: "APR", revenue: 61000, expenses: 38000, profit: 23000 },
  { month: "MAY", revenue: 55000, expenses: 36000, profit: 19000 },
  { month: "JUN", revenue: 67000, expenses: 41000, profit: 26000 },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">NEURAL ANALYTICS</h1>
          <p className="text-yellow-600 font-mono">Advanced quantum data analysis</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">ANALYTICS</span>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                PROFIT MARGIN
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono">32.5%</div>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">+5.2% vs last month</Badge>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Activity className="w-5 h-5" />
                EFFICIENCY RATE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono">87.3%</div>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Optimal performance</Badge>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Target className="w-5 h-5" />
                TARGET ACHIEVEMENT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono">94.7%</div>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Above target</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">REVENUE vs EXPENSES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fbbf24" strokeOpacity={0.2} />
                    <XAxis dataKey="month" stroke="#fbbf24" strokeOpacity={0.7} />
                    <YAxis stroke="#fbbf24" strokeOpacity={0.7} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        color: "#fbbf24",
                      }}
                    />
                    <Bar dataKey="revenue" fill="#fbbf24" opacity={0.8} />
                    <Bar dataKey="expenses" fill="#f59e0b" opacity={0.6} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">PROFIT TREND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fbbf24" strokeOpacity={0.2} />
                    <XAxis dataKey="month" stroke="#fbbf24" strokeOpacity={0.7} />
                    <YAxis stroke="#fbbf24" strokeOpacity={0.7} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        color: "#fbbf24",
                      }}
                    />
                    <Line type="monotone" dataKey="profit" stroke="#fbbf24" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/reports">
            <Button className="cyber-button">
              <Zap className="w-4 h-4 mr-2" />
              GENERATE REPORT
            </Button>
          </Link>
          <Link href="/forecasting">
            <Button className="cyber-button">
              <Activity className="w-4 h-4 mr-2" />
              AI FORECASTING
            </Button>
          </Link>
          <Link href="/export">
            <Button className="cyber-button">
              <Target className="w-4 h-4 mr-2" />
              EXPORT DATA
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
