"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap, ArrowRight } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      type: "opportunity",
      title: "Revenue Optimization",
      description: "AI detected 23% potential increase in Q4 revenue through pricing strategy adjustment.",
      confidence: 94,
      impact: "High",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      type: "warning",
      title: "Churn Risk Alert",
      description: "15 high-value customers showing early churn indicators. Immediate action recommended.",
      confidence: 87,
      impact: "Critical",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      type: "insight",
      title: "Market Trend",
      description: "Emerging demand pattern in fintech sector. Consider expanding product offerings.",
      confidence: 76,
      impact: "Medium",
      icon: Lightbulb,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ]

  const neuralMetrics = [
    { label: "Processing Speed", value: 98, unit: "%" },
    { label: "Accuracy Rate", value: 94, unit: "%" },
    { label: "Learning Efficiency", value: 89, unit: "%" },
    { label: "Prediction Confidence", value: 92, unit: "%" },
  ]

  return (
    <Card className="cyber-card matrix-rain">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-yellow-400 neural-pulse" />
          <span className="neon-text">AI Neural Insights</span>
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50">
            <Zap className="w-3 h-3 mr-1" />
            ACTIVE
          </Badge>
          <span className="text-xs text-gray-400">Last updated: 2 minutes ago</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Neural Performance Metrics */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Neural Performance</h4>
          {neuralMetrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{metric.label}</span>
                <span className="text-yellow-400 font-medium">
                  {metric.value}
                  {metric.unit}
                </span>
              </div>
              <Progress value={metric.value} className="h-1 bg-gray-800" />
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-300">Active Insights</h4>
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${insight.bgColor} border-opacity-30 hover:border-opacity-50 transition-all duration-200`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-1 rounded ${insight.bgColor}`}>
                  <insight.icon className={`w-4 h-4 ${insight.color}`} />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-medium text-white">{insight.title}</h5>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        insight.impact === "Critical"
                          ? "border-red-400/50 text-red-400"
                          : insight.impact === "High"
                            ? "border-green-400/50 text-green-400"
                            : "border-yellow-400/50 text-yellow-400"
                      }`}
                    >
                      {insight.impact}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">Confidence:</span>
                      <span className={`text-xs font-medium ${insight.color}`}>{insight.confidence}%</span>
                    </div>
                    <Button size="sm" variant="ghost" className="h-6 px-2 text-xs hover:bg-yellow-400/10">
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Center */}
        <div className="pt-4 border-t border-gray-800">
          <Button
            className="w-full bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 border-yellow-400/50"
            variant="outline"
          >
            <Target className="w-4 h-4 mr-2" />
            Open AI Command Center
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
