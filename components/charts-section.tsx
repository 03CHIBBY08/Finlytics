"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Activity, BarChart3 } from "lucide-react"

export function ChartsSection() {
  const revenueData = [
    { month: "Jan", revenue: 45000, users: 1200 },
    { month: "Feb", revenue: 52000, users: 1350 },
    { month: "Mar", revenue: 48000, users: 1280 },
    { month: "Apr", revenue: 61000, users: 1520 },
    { month: "May", revenue: 55000, users: 1450 },
    { month: "Jun", revenue: 67000, users: 1680 },
    { month: "Jul", revenue: 72000, users: 1820 },
    { month: "Aug", revenue: 69000, users: 1750 },
    { month: "Sep", revenue: 78000, users: 1950 },
    { month: "Oct", revenue: 85000, users: 2100 },
    { month: "Nov", revenue: 92000, users: 2280 },
    { month: "Dec", revenue: 98000, users: 2450 },
  ]

  const categoryData = [
    { name: "SaaS", value: 35, color: "#ffff00" },
    { name: "E-commerce", value: 25, color: "#00ffff" },
    { name: "Fintech", value: 20, color: "#ff00ff" },
    { name: "Healthcare", value: 12, color: "#00ff00" },
    { name: "Other", value: 8, color: "#ff8800" },
  ]

  const performanceData = [
    { metric: "API Response", value: 95, target: 98 },
    { metric: "Uptime", value: 99.9, target: 99.5 },
    { metric: "User Satisfaction", value: 87, target: 90 },
    { metric: "Processing Speed", value: 92, target: 85 },
  ]

  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <Card className="cyber-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="neon-text">Revenue Analytics</span>
            </CardTitle>
            <p className="text-sm text-gray-400 mt-1">Monthly revenue and user growth trends</p>
          </div>
          <Badge className="bg-green-400/20 text-green-400 border-green-400/50">+15.3% Growth</Badge>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffff00" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ffff00" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    border: "1px solid rgba(255, 255, 0, 0.3)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#ffff00" strokeWidth={2} fill="url(#revenueGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400">User Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                      border: "1px solid rgba(0, 255, 255, 0.3)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#00ffff"
                    strokeWidth={3}
                    dot={{ fill: "#00ffff", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400">Revenue by Category</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                      border: "1px solid rgba(255, 0, 255, 0.3)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
