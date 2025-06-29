import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Info, CheckCircle, X } from "lucide-react"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "ALERT",
    title: "REVENUE SPIKE DETECTED",
    message: "Monthly revenue increased by 23% - investigate cause",
    time: "2 min ago",
    read: false,
    priority: "HIGH",
  },
  {
    id: 2,
    type: "INFO",
    title: "SYSTEM UPDATE COMPLETE",
    message: "Neural intelligence system updated to v2.1",
    time: "1 hour ago",
    read: false,
    priority: "MEDIUM",
  },
  {
    id: 3,
    type: "SUCCESS",
    title: "BACKUP COMPLETED",
    message: "Daily data backup completed successfully",
    time: "3 hours ago",
    read: true,
    priority: "LOW",
  },
  {
    id: 4,
    type: "WARNING",
    title: "STORAGE CAPACITY",
    message: "Database storage at 85% capacity",
    time: "5 hours ago",
    read: true,
    priority: "HIGH",
  },
]

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-2 glow-yellow-strong">NEURAL ALERTS</h1>
            <p className="text-yellow-600 font-mono">System notification center</p>
          </div>
          <Button className="cyber-button">MARK ALL READ</Button>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">NOTIFICATIONS</span>
        </div>

        {/* Notification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Bell className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">12</div>
              <div className="text-sm text-yellow-600 font-mono">TOTAL</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">3</div>
              <div className="text-sm text-yellow-600 font-mono">UNREAD</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">2</div>
              <div className="text-sm text-yellow-600 font-mono">HIGH PRIORITY</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">24h</div>
              <div className="text-sm text-yellow-600 font-mono">LAST ALERT</div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">SYSTEM NOTIFICATIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    notification.read
                      ? "bg-black/20 border-yellow-500/10"
                      : "bg-black/40 border-yellow-500/30 glow-yellow"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg ${
                        notification.type === "ALERT"
                          ? "bg-red-500/20"
                          : notification.type === "WARNING"
                            ? "bg-orange-500/20"
                            : notification.type === "SUCCESS"
                              ? "bg-green-500/20"
                              : "bg-blue-500/20"
                      }`}
                    >
                      {notification.type === "ALERT" && <AlertTriangle className="w-5 h-5 text-red-400" />}
                      {notification.type === "WARNING" && <AlertTriangle className="w-5 h-5 text-orange-400" />}
                      {notification.type === "SUCCESS" && <CheckCircle className="w-5 h-5 text-green-400" />}
                      {notification.type === "INFO" && <Info className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-300 font-mono">{notification.title}</h3>
                      <p className="text-sm text-yellow-600 font-mono">{notification.message}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge
                          className={`text-xs ${
                            notification.priority === "HIGH"
                              ? "bg-red-500/20 text-red-400 border-red-500/50"
                              : notification.priority === "MEDIUM"
                                ? "bg-orange-500/20 text-orange-400 border-orange-500/50"
                                : "bg-green-500/20 text-green-400 border-green-500/50"
                          }`}
                        >
                          {notification.priority}
                        </Badge>
                        <span className="text-xs text-yellow-600 font-mono">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="cyber-button p-2">
                    <X className="w-4 h-4" />
                  </Button>
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
