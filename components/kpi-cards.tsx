import { TrendingUp, TrendingDown, DollarSign, Users, RotateCcw, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const kpiData = [
  {
    title: "NEURAL REVENUE",
    value: "₹1.5 Cr",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    description: "quantum boost",
    target: 85,
    status: "OPTIMAL",
  },
  {
    title: "RECURRING MATRIX",
    value: "₹45.2L",
    change: "+8%",
    trend: "up",
    icon: RotateCcw,
    description: "cycle enhanced",
    target: 72,
    status: "STABLE",
  },
  {
    title: "ACTIVE NODES",
    value: "2,847",
    change: "+15%",
    trend: "up",
    icon: Users,
    description: "network expanded",
    target: 90,
    status: "GROWING",
  },
  {
    title: "DECAY RATE",
    value: "3.2%",
    change: "-0.8%",
    trend: "down",
    icon: Percent,
    description: "containment improved",
    target: 68,
    status: "CONTAINED",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi, index) => (
        <Card
          key={index}
          className="relative overflow-hidden group hover:glow-yellow-strong transition-all duration-500 bg-black/50 border-yellow-500/30 backdrop-blur-xl holographic scan-lines"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 opacity-50" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400" />

          <CardHeader className="relative pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs font-mono text-yellow-400 tracking-wider">{kpi.title}</CardTitle>
              <div className="relative">
                <div className="p-2 rounded-lg bg-yellow-500/20 glow-yellow">
                  <kpi.icon className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-4">
            <div className="space-y-3">
              <p className="text-3xl font-bold text-yellow-300 font-mono">{kpi.value}</p>

              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={`gap-1 border-yellow-500/50 ${
                    kpi.trend === "up" ? "bg-yellow-500/20 text-yellow-400" : "bg-yellow-600/20 text-yellow-300"
                  }`}
                >
                  {kpi.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {kpi.change}
                </Badge>
                <span className="text-xs text-yellow-600 font-mono">{kpi.description}</span>
              </div>

              {/* Status indicator */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-500 font-mono">STATUS:</span>
                <span className="text-yellow-400 font-mono">{kpi.status}</span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-yellow-500">TARGET</span>
                  <span className="text-yellow-400">{kpi.target}%</span>
                </div>
                <Progress value={kpi.target} className="h-2 bg-black/50 border border-yellow-500/30" />
              </div>
            </div>

            {/* Neural activity indicator */}
            <div className="flex items-center justify-center space-x-1 pt-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-6 bg-yellow-400 rounded-full ${i < 3 ? "animate-pulse" : "opacity-30"}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
