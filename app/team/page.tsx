import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Plus, Mail, Shield, Crown, User } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@finlytics.com",
    role: "ADMIN",
    department: "LEADERSHIP",
    status: "ACTIVE",
    lastActive: "2 min ago",
    avatar: "/placeholder.svg?height=60&width=60",
    permissions: ["ALL_ACCESS"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah@finlytics.com",
    role: "ANALYST",
    department: "FINANCE",
    status: "ACTIVE",
    lastActive: "5 min ago",
    avatar: "/placeholder.svg?height=60&width=60",
    permissions: ["ANALYTICS", "REPORTS"],
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@finlytics.com",
    role: "DEVELOPER",
    department: "ENGINEERING",
    status: "ACTIVE",
    lastActive: "1 hour ago",
    avatar: "/placeholder.svg?height=60&width=60",
    permissions: ["SYSTEM", "INTEGRATIONS"],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@finlytics.com",
    role: "MANAGER",
    department: "OPERATIONS",
    status: "AWAY",
    lastActive: "3 hours ago",
    avatar: "/placeholder.svg?height=60&width=60",
    permissions: ["TEAM_MANAGEMENT", "REPORTS"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-2 glow-yellow-strong">TEAM MATRIX</h1>
            <p className="text-yellow-600 font-mono">Neural team management system</p>
          </div>
          <Link href="/team/invite">
            <Button className="cyber-button">
              <Plus className="w-4 h-4 mr-2" />
              INVITE MEMBER
            </Button>
          </Link>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">TEAM</span>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">12</div>
              <div className="text-sm text-yellow-600 font-mono">TOTAL MEMBERS</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">10</div>
              <div className="text-sm text-yellow-600 font-mono">ACTIVE</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">2</div>
              <div className="text-sm text-yellow-600 font-mono">AWAY</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">4</div>
              <div className="text-sm text-yellow-600 font-mono">DEPARTMENTS</div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">TEAM MEMBERS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 neon-border">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-yellow-500/20 text-yellow-400">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-yellow-300 font-mono flex items-center gap-2">
                        {member.name}
                        {member.role === "ADMIN" && <Crown className="w-4 h-4 text-yellow-400" />}
                        {member.role === "MANAGER" && <Shield className="w-4 h-4 text-yellow-400" />}
                        {member.role === "ANALYST" && <User className="w-4 h-4 text-yellow-400" />}
                      </h3>
                      <p className="text-sm text-yellow-600 font-mono">{member.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
                          {member.role}
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                          {member.department}
                        </Badge>
                        <Badge
                          className={`text-xs ${
                            member.status === "ACTIVE"
                              ? "bg-green-500/20 text-green-400 border-green-500/50"
                              : "bg-orange-500/20 text-orange-400 border-orange-500/50"
                          }`}
                        >
                          {member.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-yellow-600 font-mono mt-1">Last active: {member.lastActive}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-2 mb-2">
                      <Link href={`/team/${member.id}`}>
                        <Button size="sm" className="cyber-button">
                          VIEW
                        </Button>
                      </Link>
                      <Button size="sm" className="cyber-button">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-yellow-600 font-mono">Permissions: {member.permissions.length}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/team/leadership">
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">LEADERSHIP</h3>
                <p className="text-sm text-yellow-600 font-mono">Executive team</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/team/finance">
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">FINANCE</h3>
                <p className="text-sm text-yellow-600 font-mono">Financial analysts</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/team/engineering">
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">ENGINEERING</h3>
                <p className="text-sm text-yellow-600 font-mono">Development team</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/team/operations">
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">OPERATIONS</h3>
                <p className="text-sm text-yellow-600 font-mono">Operations team</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
