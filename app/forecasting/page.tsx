import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, Brain, Target, Zap, Activity } from "lucide-react"
import Link from "next/link"

const forecastData = [
  { month: "JAN", actual: 45000, predicted: 47000, confidence: 85 },
  { month: "FEB", actual: 52000, predicted: 54000, confidence: 88 },
  { month: "MAR", actual: 48000, predicted: 50000, confidence: 82 },
  { month: "APR", actual: 61000, predicted: 63000, confidence: 90 },
  { month: "MAY", actual: null, predicted: 68000, confidence: 87 },
  { month: "JUN", actual: null, predicted: 72000, confidence: 85 },
  { month: "JUL", actual: null, predicted: 78000, confidence: 83 },
  { month: "AUG", actual: null, predicted: 82000, confidence: 80 },
]

export default function ForecastingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">AI FORECASTING</h1>
          <p className="text-yellow-600 font-mono">Neural predictive intelligence system</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">FORECASTING</span>
        </div>

        {/* AI Status */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow pulse-yellow">
                  <Brain className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 font-mono">NEURAL AI STATUS</h3>
                  <p className="text-yellow-600 font-mono">Quantum prediction engine active</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 mb-2">ONLINE</Badge>
                <div className="text-sm text-yellow-600 font-mono">Accuracy: 87.3%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forecast Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">+23%</div>
              <div className="text-sm text-yellow-600 font-mono">PREDICTED GROWTH</div>
              <Progress value={87} className="mt-3 h-2" />
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">87.3%</div>
              <div className="text-sm text-yellow-600 font-mono">ACCURACY RATE</div>
              <Progress value={87} className="mt-3 h-2" />
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Brain className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">₹82K</div>
              <div className="text-sm text-yellow-600 font-mono">NEXT MONTH</div>
              <Progress value={80} className="mt-3 h-2" />
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">95%</div>
              <div className="text-sm text-yellow-600 font-mono">CONFIDENCE</div>
              <Progress value={95} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Forecast Chart */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">REVENUE FORECAST</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
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
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#fbbf24"
                    strokeWidth={3}
                    fill="url(#actualGradient)"
                    name="Actual Revenue"
                  />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="url(#predictedGradient)"
                    name="Predicted Revenue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">NEURAL INSIGHTS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-bold text-yellow-300 font-mono mb-2">GROWTH ACCELERATION</h4>
                <p className="text-sm text-yellow-600 font-mono">
                  AI predicts 23% revenue growth in Q2 based on current trends and market analysis.
                </p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-bold text-yellow-300 font-mono mb-2">SEASONAL PATTERNS</h4>
                <p className="text-sm text-yellow-600 font-mono">
                  Historical data shows 15% increase during summer months. Prepare for capacity scaling.
                </p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-bold text-yellow-300 font-mono mb-2">RISK ASSESSMENT</h4>
                <p className="text-sm text-yellow-600 font-mono">
                  Low risk scenario with 87% confidence. Market conditions remain favorable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">RECOMMENDATIONS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h4 className="font-bold text-green-300 font-mono mb-2">SCALE OPERATIONS</h4>
                <p className="text-sm text-green-600 font-mono">
                  Increase server capacity by 30% to handle predicted user growth.
                </p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h4 className="font-bold text-blue-300 font-mono mb-2">MARKETING BOOST</h4>
                <p className="text-sm text-blue-600 font-mono">
                  Optimal time to increase marketing spend for maximum ROI.
                </p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <h4 className="font-bold text-purple-300 font-mono mb-2">TEAM EXPANSION</h4>
                <p className="text-sm text-purple-600 font-mono">
                  Consider hiring 2-3 additional team members to support growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/forecasting/models">
            <Button className="cyber-button">
              <Brain className="w-4 h-4 mr-2" />
              AI MODELS
            </Button>
          </Link>
          <Link href="/forecasting/scenarios">
            <Button className="cyber-button">
              <Target className="w-4 h-4 mr-2" />
              SCENARIOS
            </Button>
          </Link>
          <Link href="/forecasting/export">
            <Button className="cyber-button">
              <Zap className="w-4 h-4 mr-2" />
              EXPORT FORECAST
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
