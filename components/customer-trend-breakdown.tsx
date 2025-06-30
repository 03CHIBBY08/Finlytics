"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, Smartphone, Monitor, UserPlus, UserMinus, Target } from "lucide-react"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts"

export function CustomerTrendBreakdown() {
  const acquisitionData = [
    { month: "Jan", organic: 450, paid: 320, referral: 180, social: 120 },
    { month: "Feb", organic: 520, paid: 380, referral: 220, social: 150 },
    { month: "Mar", organic: 480, paid: 350, referral: 190, social: 140 },
    { month: "Apr", organic: 610, paid: 420, referral: 250, social: 180 },
    { month: "May", organic: 580, paid: 390, referral: 230, social: 160 },
    { month: "Jun", organic: 670, paid: 450, referral: 280, social: 200 },
  ]

  const customerSegments = [
    {
      segment: "Enterprise",
      count: 1247,
      growth: "+15.2%",
      revenue: "$1.2M",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      icon: Monitor,
    },
    {
      segment: "SMB",
      count: 3891,
      growth: "+8.7%",
      revenue: "$890K",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      icon: Users,
    },
    {
      segment: "Startup",
      count: 2156,
      growth: "+22.1%",
      revenue: "$340K",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      icon: TrendingUp,
    },
    {
      segment: "Individual",
      count: 8743,
      growth: "+12.4%",
      revenue: "$180K",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      icon: Smartphone,
    },
  ]

  const channelPerformance = [
    { channel: "Organic Search", conversion: 3.2, cost: 0, quality: 95 },
    { channel: "Paid Ads", conversion: 2.8, cost: 45, quality: 78 },
    { channel: "Social Media", conversion: 1.9, cost: 25, quality: 65 },
    { channel: "Referrals", conversion: 4.1, cost: 5, quality: 92 },
    { channel: "Email", conversion: 2.4, cost: 8, quality: 88 },
  ]

  const retentionData = [
    { period: "Week 1", retained: 100 },
    { period: "Week 2", retained: 85 },
    { period: "Week 4", retained: 72 },
    { period: "Month 2", retained: 65 },
    { period: "Month 3", retained: 58 },
    { period: "Month 6", retained: 52 },
    { period: "Year 1", retained: 45 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400">Customer Analytics Hub</span>
          </CardTitle>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-400/20 text-green-400 border-green-400/50">
              <UserPlus className="w-3 h-3 mr-1" />
              +1,247 New
            </Badge>
            <Badge className="bg-red-400/20 text-red-400 border-red-400/50">
              <UserMinus className="w-3 h-3 mr-1" />
              -89 Churned
            </Badge>
            <span className="text-xs text-gray-400">Last 30 days</span>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Segments */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="text-lg">Customer Segments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {customerSegments.map((segment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded ${segment.bgColor}`}>
                      <segment.icon className={`w-4 h-4 ${segment.color}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{segment.segment}</span>
                  </div>
                  <Badge className={`${segment.bgColor} ${segment.color} border-opacity-50`}>{segment.growth}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{segment.count} customers</span>
                  <span className={segment.color}>{segment.revenue}</span>
                </div>
                <Progress value={(segment.count / 10000) * 100} className="h-1 bg-gray-800" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Acquisition Channels */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="text-lg">Acquisition Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={acquisitionData}>
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
                  <Area
                    type="monotone"
                    dataKey="organic"
                    stackId="1"
                    stroke="#00ff00"
                    fill="#00ff00"
                    fillOpacity={0.3}
                  />
                  <Area type="monotone" dataKey="paid" stackId="1" stroke="#ffff00" fill="#ffff00" fillOpacity={0.3} />
                  <Area
                    type="monotone"
                    dataKey="referral"
                    stackId="1"
                    stroke="#00ffff"
                    fill="#00ffff"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="social"
                    stackId="1"
                    stroke="#ff00ff"
                    fill="#ff00ff"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Channel Performance */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="text-lg">Channel Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {channelPerformance.map((channel, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{channel.channel}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                      {channel.conversion}% CVR
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Quality: {channel.quality}%</span>
                  <span>CAC: ${channel.cost}</span>
                </div>
                <Progress value={channel.quality} className="h-1 bg-gray-800" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Retention Analysis */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-green-400">Customer Retention Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="period" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    border: "1px solid rgba(0, 255, 0, 0.3)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="retained"
                  stroke="#00ff00"
                  strokeWidth={3}
                  dot={{ fill: "#00ff00", strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
