import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Clock, Activity } from "lucide-react"
import Link from "next/link"

const systemComponents = [
  {
    name: "API Gateway",
    status: "operational",
    uptime: "99.99%",
    responseTime: "45ms",
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.95%",
    responseTime: "12ms",
  },
  {
    name: "Analytics Engine",
    status: "operational",
    uptime: "99.98%",
    responseTime: "156ms",
  },
  {
    name: "Report Generator",
    status: "maintenance",
    uptime: "99.92%",
    responseTime: "234ms",
  },
  {
    name: "Neural AI",
    status: "operational",
    uptime: "99.97%",
    responseTime: "89ms",
  },
  {
    name: "File Storage",
    status: "operational",
    uptime: "99.99%",
    responseTime: "23ms",
  },
]

const incidents = [
  {
    date: "2024-01-14",
    title: "Scheduled Maintenance - Report Generator",
    status: "resolved",
    duration: "2 hours",
  },
  {
    date: "2024-01-10",
    title: "API Rate Limiting Issues",
    status: "resolved",
    duration: "45 minutes",
  },
  {
    date: "2024-01-08",
    title: "Database Performance Optimization",
    status: "resolved",
    duration: "1 hour",
  },
]

export default function StatusPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "maintenance":
        return <Clock className="w-5 h-5 text-yellow-400" />
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-orange-400" />
      default:
        return <AlertTriangle className="w-5 h-5 text-red-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50">OPERATIONAL</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">MAINTENANCE</Badge>
      case "degraded":
        return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">DEGRADED</Badge>
      default:
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/50">DOWN</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">SYSTEM STATUS</h1>
          <p className="text-yellow-600 font-mono">Real-time system health monitoring</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">STATUS</span>
        </div>

        {/* Overall Status */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <CheckCircle className="w-12 h-12 text-green-400" />
              <div>
                <h2 className="text-3xl font-bold text-green-400 font-mono">ALL SYSTEMS OPERATIONAL</h2>
                <p className="text-yellow-600 font-mono">Last updated: {new Date().toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">99.97%</div>
                <div className="text-sm text-yellow-600 font-mono">UPTIME (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">67ms</div>
                <div className="text-sm text-yellow-600 font-mono">AVG RESPONSE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">0</div>
                <div className="text-sm text-yellow-600 font-mono">ACTIVE INCIDENTS</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Components */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              SYSTEM COMPONENTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(component.status)}
                    <div>
                      <h3 className="font-semibold text-yellow-300 font-mono">{component.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-yellow-600 font-mono">
                        <span>Uptime: {component.uptime}</span>
                        <span>Response: {component.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(component.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">RECENT INCIDENTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div>
                    <h3 className="font-semibold text-yellow-300 font-mono">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-yellow-600 font-mono">
                      <span>{incident.date}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">RESOLVED</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
