"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, TrendingUp, AlertCircle } from "lucide-react"

export function FinanceHealthWidget() {
  const healthScore = 87
  const metrics = [
    { label: "Cash Flow", value: 92, status: "excellent" },
    { label: "Debt Ratio", value: 78, status: "good" },
    { label: "Profitability", value: 85, status: "good" },
    { label: "Liquidity", value: 94, status: "excellent" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-400"
      case "good":
        return "text-yellow-400"
      case "warning":
        return "text-orange-400"
      default:
        return "text-red-400"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return "border-green-500 text-green-400"
      case "good":
        return "border-yellow-500 text-yellow-400"
      case "warning":
        return "border-orange-500 text-orange-400"
      default:
        return "border-red-500 text-red-400"
    }
  }

  return (
    <Card className="neural-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-400 font-mono">
          <Heart className="w-5 h-5" />
          FINANCIAL HEALTH
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Health Score */}
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,0,0.2)" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FBBF24"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - healthScore / 100)}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-400 font-mono">{healthScore}</span>
            </div>
          </div>
          <Badge variant="outline" className="border-green-500 text-green-400 mb-2">
            EXCELLENT
          </Badge>
          <p className="text-xs text-yellow-600">Overall Financial Health</p>
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-300 font-mono">{metric.label}</span>
                <Badge variant="outline" className={`text-xs ${getStatusBadge(metric.status)}`}>
                  {metric.value}%
                </Badge>
              </div>
              <Progress value={metric.value} className="h-2 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-yellow-500/20">
          <h4 className="text-sm font-semibold text-yellow-400 mb-3 font-mono">RECOMMENDATIONS</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-yellow-600">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span>Increase emergency fund by 15%</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-yellow-600">
              <Shield className="w-3 h-3 text-yellow-400" />
              <span>Diversify investment portfolio</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-yellow-600">
              <AlertCircle className="w-3 h-3 text-orange-400" />
              <span>Review quarterly expenses</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
