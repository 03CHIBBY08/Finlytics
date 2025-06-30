"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, TrendingUp, AlertCircle, CheckCircle, Activity, DollarSign } from "lucide-react"

export function FinanceHealthWidget() {
  const healthScore = 87

  const healthMetrics = [
    {
      category: "Cash Flow",
      score: 92,
      status: "excellent",
      icon: DollarSign,
      description: "Strong positive cash flow trend",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      category: "Debt Ratio",
      score: 78,
      status: "good",
      icon: Shield,
      description: "Manageable debt levels",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      category: "Profitability",
      score: 85,
      status: "good",
      icon: TrendingUp,
      description: "Consistent profit margins",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      category: "Liquidity",
      score: 94,
      status: "excellent",
      icon: Activity,
      description: "High liquidity reserves",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
  ]

  const riskFactors = [
    {
      factor: "Market Volatility",
      level: "Low",
      impact: 15,
      color: "text-green-400",
    },
    {
      factor: "Credit Risk",
      level: "Medium",
      impact: 35,
      color: "text-yellow-400",
    },
    {
      factor: "Operational Risk",
      level: "Low",
      impact: 20,
      color: "text-green-400",
    },
  ]

  const achievements = [
    "Maintained positive cash flow for 12 months",
    "Reduced operational costs by 8%",
    "Improved profit margins by 12%",
    "Achieved AAA credit rating",
  ]

  const getHealthColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getHealthStatus = (score: number) => {
    if (score >= 90) return "Excellent"
    if (score >= 70) return "Good"
    return "Needs Attention"
  }

  return (
    <Card className="cyber-card circuit-pattern">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-400 neural-pulse" />
          <span className="text-red-400">Financial Health</span>
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Badge
            className={`${
              healthScore >= 90
                ? "bg-green-400/20 text-green-400 border-green-400/50"
                : healthScore >= 70
                  ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/50"
                  : "bg-red-400/20 text-red-400 border-red-400/50"
            }`}
          >
            {getHealthStatus(healthScore)}
          </Badge>
          <span className="text-xs text-gray-400">Updated 5 minutes ago</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Health Score */}
        <div className="text-center space-y-2">
          <div className={`text-4xl font-bold ${getHealthColor(healthScore)}`}>{healthScore}</div>
          <p className="text-sm text-gray-400">Overall Health Score</p>
          <Progress value={healthScore} className="h-2 bg-gray-800" />
        </div>

        {/* Health Metrics */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Key Metrics</h4>
          {healthMetrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`p-2 rounded ${metric.bgColor}`}>
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{metric.category}</span>
                  <span className={`text-sm font-medium ${metric.color}`}>{metric.score}%</span>
                </div>
                <p className="text-xs text-gray-500">{metric.description}</p>
                <Progress value={metric.score} className="h-1 mt-1 bg-gray-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Risk Assessment */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Risk Assessment</h4>
          {riskFactors.map((risk, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertCircle className={`w-4 h-4 ${risk.color}`} />
                <span className="text-sm text-gray-300">{risk.factor}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    risk.level === "Low"
                      ? "border-green-400/50 text-green-400"
                      : risk.level === "Medium"
                        ? "border-yellow-400/50 text-yellow-400"
                        : "border-red-400/50 text-red-400"
                  }`}
                >
                  {risk.level}
                </Badge>
                <span className="text-xs text-gray-500">{risk.impact}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Recent Achievements</h4>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-400 leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
