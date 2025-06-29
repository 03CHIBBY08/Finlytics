"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Target } from "lucide-react"

export function KPICards() {
  const kpis = [
    {
      title: "TOTAL REVENUE",
      value: "$2,847,392",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month",
    },
    {
      title: "ACTIVE USERS",
      value: "45,231",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "monthly active",
    },
    {
      title: "CONVERSION RATE",
      value: "3.24%",
      change: "-0.4%",
      trend: "down",
      icon: Target,
      description: "from visitors",
    },
    {
      title: "TRANSACTIONS",
      value: "12,847",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
      description: "this month",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={index} className="neural-card hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-400 font-mono">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-300 font-mono glow-yellow">{kpi.value}</div>
              <div className="flex items-center space-x-2 text-xs text-yellow-600">
                <TrendIcon className={`h-3 w-3 ${kpi.trend === "up" ? "text-green-400" : "text-red-400"}`} />
                <span className={kpi.trend === "up" ? "text-green-400" : "text-red-400"}>{kpi.change}</span>
                <span>{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
