"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign, Zap } from "lucide-react"
import { generateReport, downloadFile } from "@/lib/export-utils"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const reports = [
  {
    id: 1,
    title: "MONTHLY REVENUE REPORT",
    description: "Comprehensive revenue analysis for the current month",
    type: "REVENUE",
    status: "READY",
    lastGenerated: "2024-01-15",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "CUSTOMER ANALYTICS REPORT",
    description: "Detailed customer behavior and segmentation analysis",
    type: "CUSTOMERS",
    status: "GENERATING",
    lastGenerated: "2024-01-14",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "FINANCIAL PERFORMANCE REPORT",
    description: "Complete financial health and performance metrics",
    type: "FINANCE",
    status: "READY",
    lastGenerated: "2024-01-13",
    size: "3.2 MB",
  },
  {
    id: 4,
    title: "GROWTH METRICS REPORT",
    description: "Growth trends and forecasting analysis",
    type: "GROWTH",
    status: "READY",
    lastGenerated: "2024-01-12",
    size: "1.5 MB",
  },
]

export function ReportsPageClient() {
  const [generatingReports, setGeneratingReports] = useState<number[]>([])
  const { toast } = useToast()

  const handleDownloadReport = async (report: any) => {
    try {
      setGeneratingReports((prev) => [...prev, report.id])

      // Simulate report generation delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const reportData = generateReport(report.type.toLowerCase(), {
        totalRevenue: 150000,
        growth: "+12%",
        customers: 2847,
        churnRate: "3.2%",
        monthly: [
          { month: "JAN", revenue: 45000 },
          { month: "FEB", revenue: 52000 },
          { month: "MAR", revenue: 48000 },
        ],
      })

      downloadFile(reportData.content, reportData.filename, "text/plain")

      toast({
        title: "Report Downloaded",
        description: `${report.title} has been downloaded successfully!`,
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download report. Please try again.",
        variant: "destructive",
      })
    } finally {
      setGeneratingReports((prev) => prev.filter((id) => id !== report.id))
    }
  }

  const handleGenerateNewReport = async (type: string) => {
    try {
      toast({
        title: "Generating Report",
        description: `Creating new ${type} report...`,
      })

      // Simulate report generation
      await new Promise((resolve) => setTimeout(resolve, 3000))

      const reportData = generateReport(type, {})
      downloadFile(reportData.content, reportData.filename, "text/plain")

      toast({
        title: "Report Generated",
        description: `New ${type} report has been generated and downloaded!`,
      })
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate report. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6 text-center">
            <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300 font-mono">24</div>
            <div className="text-sm text-yellow-600 font-mono">TOTAL REPORTS</div>
          </CardContent>
        </Card>
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300 font-mono">18</div>
            <div className="text-sm text-yellow-600 font-mono">READY</div>
          </CardContent>
        </Card>
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300 font-mono">6</div>
            <div className="text-sm text-yellow-600 font-mono">SCHEDULED</div>
          </CardContent>
        </Card>
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6 text-center">
            <Download className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300 font-mono">156</div>
            <div className="text-sm text-yellow-600 font-mono">DOWNLOADS</div>
          </CardContent>
        </Card>
      </div>

      {/* Generate New Report */}
      <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
        <CardHeader>
          <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
            <Zap className="w-5 h-5" />
            GENERATE NEW REPORT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button className="cyber-button" onClick={() => handleGenerateNewReport("revenue")}>
              <DollarSign className="w-4 h-4 mr-2" />
              REVENUE REPORT
            </Button>
            <Button className="cyber-button" onClick={() => handleGenerateNewReport("customer")}>
              <Users className="w-4 h-4 mr-2" />
              CUSTOMER REPORT
            </Button>
            <Button className="cyber-button" onClick={() => handleGenerateNewReport("growth")}>
              <TrendingUp className="w-4 h-4 mr-2" />
              GROWTH REPORT
            </Button>
            <Button className="cyber-button" onClick={() => handleGenerateNewReport("system")}>
              <FileText className="w-4 h-4 mr-2" />
              SYSTEM REPORT
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
        <CardHeader>
          <CardTitle className="text-yellow-400 font-mono">AVAILABLE REPORTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow">
                    <FileText className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-300 font-mono">{report.title}</h3>
                    <p className="text-sm text-yellow-600 font-mono">{report.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
                        {report.type}
                      </Badge>
                      <Badge
                        className={`text-xs ${
                          report.status === "READY"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/50"
                        }`}
                      >
                        {report.status}
                      </Badge>
                      <span className="text-xs text-yellow-600 font-mono">
                        Last: {report.lastGenerated} | Size: {report.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/reports/${report.id}`}>
                    <Button size="sm" className="cyber-button">
                      VIEW
                    </Button>
                  </Link>
                  {report.status === "READY" && (
                    <Button
                      size="sm"
                      className="cyber-button"
                      onClick={() => handleDownloadReport(report)}
                      disabled={generatingReports.includes(report.id)}
                    >
                      {generatingReports.includes(report.id) ? (
                        <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/reports/revenue">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">REVENUE REPORTS</h3>
              <p className="text-sm text-yellow-600 font-mono">Financial performance analysis</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/reports/customers">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">CUSTOMER REPORTS</h3>
              <p className="text-sm text-yellow-600 font-mono">Customer behavior insights</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/reports/growth">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">GROWTH REPORTS</h3>
              <p className="text-sm text-yellow-600 font-mono">Growth metrics and trends</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/reports/custom">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">CUSTOM REPORTS</h3>
              <p className="text-sm text-yellow-600 font-mono">Build your own reports</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  )
}
