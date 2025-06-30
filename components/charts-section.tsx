"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart,
} from "recharts"
import { Activity, TrendingUp, Zap, Target } from "lucide-react"

const revenueData = [
  { month: "JAN", revenue: 45000, users: 1200, prediction: 47000 },
  { month: "FEB", revenue: 52000, users: 1350, prediction: 54000 },
  { month: "MAR", revenue: 48000, users: 1280, prediction: 50000 },
  { month: "APR", revenue: 61000, users: 1520, prediction: 63000 },
  { month: "MAY", revenue: 55000, users: 1450, prediction: 57000 },
  { month: "JUN", revenue: 67000, users: 1680, prediction: 69000 },
  { month: "JUL", revenue: 72000, users: 1820, prediction: 74000 },
  { month: "AUG", revenue: 69000, users: 1750, prediction: 71000 },
  { month: "SEP", revenue: 78000, users: 1950, prediction: 80000 },
  { month: "OCT", revenue: 85000, users: 2100, prediction: 87000 },
  { month: "NOV", revenue: 92000, users: 2280, prediction: 94000 },
  { month: "DEC", revenue: 98000, users: 2450, prediction: 100000 },
]

const categoryData = [
  { category: "BASIC_NODE", revenue: 45000, growth: 12 },
  { category: "PRO_MATRIX", revenue: 78000, growth: 18 },
  { category: "ENTERPRISE_CORE", revenue: 125000, growth: 25 },
  { category: "NEURAL_ADDONS", revenue: 32000, growth: 8 },
  { category: "QUANTUM_SERVICES", revenue: 28000, growth: 15 },
]

export function ChartsSection() {
  const [timeRange, setTimeRange] = useState("12M")
  const [isRealTime, setIsRealTime] = useState(false)
  const [dataPoints, setDataPoints] = useState(revenueData)

  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        setDataPoints((prev) =>
          prev.map((item) => ({
            ...item,
            revenue: item.revenue + Math.random() * 1000 - 500,
            users: item.users + Math.floor(Math.random() * 20 - 10),
          })),
        )
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isRealTime])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Neural Revenue Analytics */}
      <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow scan-lines">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg glow-yellow">
                <Activity className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <CardTitle className="text-lg font-mono text-yellow-400">NEURAL REVENUE MATRIX</CardTitle>
                <p className="text-xs text-yellow-600 font-mono">Real-time quantum analysis</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRealTime(!isRealTime)}
                className={`cyber-button text-xs ${isRealTime ? "bg-yellow-500/20" : ""}`}
              >
                <Zap className="w-3 h-3 mr-1" />
                {isRealTime ? "LIVE" : "STATIC"}
              </Button>
              {["30D", "90D", "12M"].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className="cyber-button text-xs font-mono"
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80 relative">
            {isRealTime && (
              <Badge className="absolute top-2 right-2 z-10 bg-yellow-500/20 text-yellow-400 border-yellow-500/50 animate-pulse">
                LIVE DATA STREAM
              </Badge>
            )}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataPoints}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#fbbf24" strokeOpacity={0.2} />
                <XAxis dataKey="month" className="text-xs font-mono" stroke="#fbbf24" strokeOpacity={0.7} />
                <YAxis className="text-xs font-mono" stroke="#fbbf24" strokeOpacity={0.7} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    border: "1px solid #fbbf24",
                    borderRadius: "8px",
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
                    color: "#fbbf24",
                    fontFamily: "monospace",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#fbbf24"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                  name="Revenue (₹)"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fill="url(#usersGradient)"
                  name="Active Users"
                />
                <Line
                  type="monotone"
                  dataKey="prediction"
                  stroke="#fbbf24"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                  name="AI Prediction"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quantum Category Analysis */}
      <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow scan-lines">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg glow-yellow">
              <Target className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <CardTitle className="text-lg font-mono text-yellow-400">QUANTUM CATEGORY MATRIX</CardTitle>
              <p className="text-xs text-yellow-600 font-mono">Revenue distribution analysis</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#fbbf24" strokeOpacity={0.2} />
                <XAxis
                  dataKey="category"
                  className="text-xs font-mono"
                  stroke="#fbbf24"
                  strokeOpacity={0.7}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis className="text-xs font-mono" stroke="#fbbf24" strokeOpacity={0.7} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    border: "1px solid #fbbf24",
                    borderRadius: "8px",
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
                    color: "#fbbf24",
                    fontFamily: "monospace",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="url(#barGradient)"
                  radius={[4, 4, 0, 0]}
                  stroke="#fbbf24"
                  strokeWidth={1}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Growth indicators */}
          <div className="mt-4 grid grid-cols-5 gap-2">
            {categoryData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xs font-mono text-yellow-500">{item.category.split("_")[0]}</div>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs font-mono text-yellow-400">{item.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
