import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { DollarSign, TrendingUp, Target, Calendar, ArrowUp } from "lucide-react"
import Link from "next/link"

const revenueData = [
  { month: "JAN", mrr: 45000, arr: 540000, growth: 12 },
  { month: "FEB", mrr: 52000, arr: 624000, growth: 15.5 },
  { month: "MAR", mrr: 48000, arr: 576000, growth: -7.7 },
  { month: "APR", mrr: 61000, arr: 732000, growth: 27.1 },
  { month: "MAY", mrr: 55000, arr: 660000, growth: -9.8 },
  { month: "JUN", mrr: 67000, arr: 804000, growth: 21.8 },
]

const revenueStreams = [
  { name: "SUBSCRIPTIONS", value: 65, color: "#fbbf24" },
  { name: "ADD_ONS", value: 20, color: "#f59e0b" },
  { name: "SERVICES", value: 10, color: "#d97706" },
  { name: "PARTNERSHIPS", value: 5, color: "#b45309" },
]

export default function RevenuePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">REVENUE MATRIX</h1>
          <p className="text-yellow-600 font-mono">Neural revenue intelligence system</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">REVENUE</span>
        </div>

        {/* Revenue KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-400 font-mono text-sm flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                TOTAL REVENUE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-300 font-mono">₹1.5 Cr</div>
              <div className="flex items-center space-x-2 mt-2">
                <ArrowUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-mono">+12.5%</span>
              </div>
              <Progress value={85} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-400 font-mono text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                MRR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-300 font-mono">₹67K</div>
              <div className="flex items-center space-x-2 mt-2">
                <ArrowUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-mono">+21.8%</span>
              </div>
              <Progress value={72} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-400 font-mono text-sm flex items-center gap-2">
                <Target className="w-4 h-4" />
                ARR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-300 font-mono">₹8.04L</div>
              <div className="flex items-center space-x-2 mt-2">
                <ArrowUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-mono">+18.2%</span>
              </div>
              <Progress value={90} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-400 font-mono text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                GROWTH RATE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-300 font-mono">21.8%</div>
              <div className="flex items-center space-x-2 mt-2">
                <ArrowUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-mono">vs last month</span>
              </div>
              <Progress value={78} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">REVENUE TREND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
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
                    <Line type="monotone" dataKey="mrr" stroke="#fbbf24" strokeWidth={3} name="MRR" />
                    <Line type="monotone" dataKey="arr" stroke="#f59e0b" strokeWidth={2} name="ARR" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">REVENUE STREAMS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueStreams}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {revenueStreams.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        color: "#fbbf24",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {revenueStreams.map((stream, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stream.color }} />
                    <span className="text-xs text-yellow-400 font-mono">
                      {stream.name}: {stream.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Targets */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">REVENUE TARGETS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-yellow-400 font-mono">Q1 TARGET</span>
                  <span className="text-yellow-300 font-mono">₹2.5 Cr</span>
                </div>
                <Progress value={85} className="h-3" />
                <div className="text-sm text-yellow-600 font-mono">85% Complete</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-yellow-400 font-mono">Q2 TARGET</span>
                  <span className="text-yellow-300 font-mono">₹3.2 Cr</span>
                </div>
                <Progress value={62} className="h-3" />
                <div className="text-sm text-yellow-600 font-mono">62% Complete</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-yellow-400 font-mono">ANNUAL TARGET</span>
                  <span className="text-yellow-300 font-mono">₹15 Cr</span>
                </div>
                <Progress value={45} className="h-3" />
                <div className="text-sm text-yellow-600 font-mono">45% Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/revenue/forecasting">
            <Button className="cyber-button">REVENUE FORECASTING</Button>
          </Link>
          <Link href="/revenue/optimization">
            <Button className="cyber-button">OPTIMIZATION</Button>
          </Link>
          <Link href="/revenue/reports">
            <Button className="cyber-button">REVENUE REPORTS</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
