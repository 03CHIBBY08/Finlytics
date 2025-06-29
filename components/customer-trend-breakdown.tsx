"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, UserMinus, TrendingUp } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const customerData = [
  { month: "Jan", new: 120, churned: 15, net: 105 },
  { month: "Feb", new: 145, churned: 22, net: 123 },
  { month: "Mar", new: 168, churned: 18, net: 150 },
  { month: "Apr", new: 192, churned: 25, net: 167 },
  { month: "May", new: 215, churned: 20, net: 195 },
  { month: "Jun", new: 238, churned: 28, net: 210 },
]

export function CustomerTrendBreakdown() {
  const totalCustomers = 45231
  const newCustomers = 238
  const churnedCustomers = 28
  const netGrowth = newCustomers - churnedCustomers
  const growthRate = ((netGrowth / totalCustomers) * 100).toFixed(2)

  return (
    <Card className="neural-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-400 font-mono">
          <Users className="w-5 h-5" />
          CUSTOMER ACQUISITION MATRIX
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-black/40 border border-yellow-500/20">
            <UserPlus className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-green-400 font-mono">{newCustomers}</div>
            <div className="text-xs text-yellow-600">New Customers</div>
          </div>

          <div className="text-center p-3 rounded-lg bg-black/40 border border-yellow-500/20">
            <UserMinus className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-red-400 font-mono">{churnedCustomers}</div>
            <div className="text-xs text-yellow-600">Churned</div>
          </div>

          <div className="text-center p-3 rounded-lg bg-black/40 border border-yellow-500/20">
            <TrendingUp className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-yellow-400 font-mono">+{netGrowth}</div>
            <div className="text-xs text-yellow-600">Net Growth</div>
          </div>

          <div className="text-center p-3 rounded-lg bg-black/40 border border-yellow-500/20">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-blue-400 font-mono">{growthRate}%</div>
            <div className="text-xs text-yellow-600">Growth Rate</div>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,0,0.1)" />
              <XAxis dataKey="month" stroke="#FCD34D" />
              <YAxis stroke="#FCD34D" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  border: "1px solid rgba(255,255,0,0.3)",
                  borderRadius: "8px",
                }}
              />
              <Area type="monotone" dataKey="new" stackId="1" stroke="#10B981" fill="rgba(16, 185, 129, 0.3)" />
              <Area type="monotone" dataKey="churned" stackId="2" stroke="#EF4444" fill="rgba(239, 68, 68, 0.3)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Segments */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-yellow-400 font-mono">ACQUISITION CHANNELS</h4>
          <div className="space-y-2">
            {[
              { channel: "Organic Search", percentage: 35, customers: 83 },
              { channel: "Paid Ads", percentage: 28, customers: 67 },
              { channel: "Referrals", percentage: 22, customers: 52 },
              { channel: "Social Media", percentage: 15, customers: 36 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded bg-black/30">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-yellow-300">{item.channel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-400 text-xs">
                    {item.customers}
                  </Badge>
                  <span className="text-xs text-yellow-600 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
