"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const sourceData = [
  { name: "Ads", value: 35, color: "#3b82f6" },
  { name: "Referrals", value: 28, color: "#10b981" },
  { name: "Organic", value: 22, color: "#8b5cf6" },
  { name: "Influencers", value: 15, color: "#f59e0b" },
]

const metrics = [
  { label: "CAC", value: "₹250", description: "Customer Acquisition Cost" },
  { label: "LTV", value: "₹2,450", description: "Lifetime Value" },
  { label: "ARPU", value: "₹1,050", description: "Average Revenue Per User" },
]

export function CustomerTrendBreakdown() {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Customer Acquisition Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-700 dark:text-slate-300">Traffic Sources</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2">
              {sourceData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-700 dark:text-slate-300">Key Metrics</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{metric.label}</span>
                    <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{metric.value}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Insights */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <h4 className="font-medium text-slate-800 dark:text-slate-100 mb-2">💡 Insight</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Referral customers have 40% higher LTV. Consider implementing a referral rewards program.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
