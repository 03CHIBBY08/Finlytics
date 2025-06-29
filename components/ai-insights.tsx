"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      type: "opportunity",
      title: "Revenue Optimization",
      description: "Customer segment 'Enterprise' shows 23% higher LTV. Consider targeted campaigns.",
      confidence: 94,
      impact: "High",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      type: "warning",
      title: "Churn Risk Alert",
      description: "15 high-value customers show decreased engagement. Immediate action recommended.",
      confidence: 87,
      impact: "Critical",
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      type: "insight",
      title: "Market Trend",
      description: "Q3 shows 34% increase in mobile transactions. Mobile-first strategy advised.",
      confidence: 91,
      impact: "Medium",
      icon: Lightbulb,
      color: "text-yellow-400",
    },
  ]

  return (
    <Card className="neural-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-400 font-mono">
          <Brain className="w-5 h-5" />
          AI NEURAL INSIGHTS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <div
              key={index}
              className="p-4 rounded-lg bg-black/40 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${insight.color}`} />
                  <h4 className="font-semibold text-yellow-300 text-sm">{insight.title}</h4>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    insight.impact === "Critical"
                      ? "border-red-500 text-red-400"
                      : insight.impact === "High"
                        ? "border-green-500 text-green-400"
                        : "border-yellow-500 text-yellow-400"
                  }`}
                >
                  {insight.impact}
                </Badge>
              </div>

              <p className="text-yellow-600 text-xs mb-3 leading-relaxed">{insight.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-yellow-500">Confidence:</span>
                  <div className="w-16 h-1 bg-black rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-1000"
                      style={{ width: `${insight.confidence}%` }}
                    />
                  </div>
                  <span className="text-xs text-yellow-400 font-mono">{insight.confidence}%</span>
                </div>

                <Button size="sm" variant="ghost" className="text-yellow-400 hover:text-yellow-300 p-1 h-auto">
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          )
        })}

        <Button className="w-full mt-4 cyber-button">View All Neural Insights</Button>
      </CardContent>
    </Card>
  )
}
