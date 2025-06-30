"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Users, Zap, Target } from "lucide-react"

export function KPICards() {
  const kpis = [
    {
      title: "Total Revenue",
      value: "$2,847,392",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Active Users",
      value: "45,231",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "vs last month",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.3%",
      trend: "down",
      icon: Target,
      description: "vs last month",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      title: "AI Efficiency",
      value: "94.7%",
      change: "+2.1%",
      trend: "up",
      icon: Zap,
      description: "neural accuracy",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className="cyber-card hover:cyber-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
            <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold neon-text">{kpi.value}</div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={kpi.trend === "up" ? "default" : "destructive"}
                  className={`${
                    kpi.trend === "up"
                      ? "bg-green-400/20 text-green-400 border-green-400/50"
                      : "bg-red-400/20 text-red-400 border-red-400/50"
                  }`}
                >
                  {kpi.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {kpi.change}
                </Badge>
                <span className="text-xs text-gray-400">{kpi.description}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
