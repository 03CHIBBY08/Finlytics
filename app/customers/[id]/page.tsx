import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Calendar, DollarSign, TrendingUp, Edit } from "lucide-react"
import Link from "next/link"

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  // Mock customer data - in real app, fetch based on params.id
  const customer = {
    id: params.id,
    name: "Acme Corp",
    email: "contact@acme.com",
    phone: "+91 98765 43210",
    plan: "ENTERPRISE_CORE",
    status: "ACTIVE",
    revenue: 125000,
    joinDate: "2023-01-15",
    avatar: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
    address: "123 Tech Street, Mumbai, India",
    website: "https://acme.com",
    employees: "500-1000",
    lastActivity: "2 hours ago",
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-2 glow-yellow-strong">CUSTOMER PROFILE</h1>
            <p className="text-yellow-600 font-mono">Detailed customer information</p>
          </div>
          <Link href={`/customers/${customer.id}/edit`}>
            <Button className="cyber-button">
              <Edit className="w-4 h-4 mr-2" />
              EDIT CUSTOMER
            </Button>
          </Link>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <Link href="/customers" className="text-yellow-500 hover:text-yellow-400">
            CUSTOMERS
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">{customer.name}</span>
        </div>

        {/* Customer Overview */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <Avatar className="w-20 h-20 neon-border">
                <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-yellow-500/20 text-yellow-400 text-xl">
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-yellow-300 font-mono mb-2">{customer.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 font-mono">{customer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 font-mono">{customer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 font-mono">Joined: {customer.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 font-mono">Last active: {customer.lastActivity}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">{customer.plan}</Badge>
                  <Badge
                    className={`${
                      customer.status === "ACTIVE"
                        ? "bg-green-500/20 text-green-400 border-green-500/50"
                        : "bg-red-500/20 text-red-400 border-red-500/50"
                    }`}
                  >
                    {customer.status}
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">{customer.industry}</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                    {customer.employees} employees
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-yellow-300 font-mono">₹{customer.revenue.toLocaleString()}</div>
                <div className="text-sm text-yellow-600 font-mono">Total Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">CONTACT INFO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-yellow-500 font-mono text-sm">ADDRESS</label>
                <p className="text-yellow-300 font-mono">{customer.address}</p>
              </div>
              <div>
                <label className="text-yellow-500 font-mono text-sm">WEBSITE</label>
                <a
                  href={customer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 font-mono hover:text-yellow-400 transition-colors"
                >
                  {customer.website}
                </a>
              </div>
              <div>
                <label className="text-yellow-500 font-mono text-sm">INDUSTRY</label>
                <p className="text-yellow-300 font-mono">{customer.industry}</p>
              </div>
              <div>
                <label className="text-yellow-500 font-mono text-sm">COMPANY SIZE</label>
                <p className="text-yellow-300 font-mono">{customer.employees} employees</p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Metrics */}
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">REVENUE METRICS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">TOTAL REVENUE</span>
                <span className="text-yellow-300 font-mono font-bold">₹{customer.revenue.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">MONTHLY AVG</span>
                <span className="text-yellow-300 font-mono font-bold">
                  ₹{Math.round(customer.revenue / 12).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">PLAN VALUE</span>
                <span className="text-yellow-300 font-mono font-bold">₹12,500/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">LTV</span>
                <span className="text-yellow-300 font-mono font-bold">
                  ₹{(customer.revenue * 2.5).toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">ACCOUNT STATUS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">STATUS</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">{customer.status}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">PLAN</span>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">{customer.plan}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">NEXT BILLING</span>
                <span className="text-yellow-300 font-mono">Jan 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-mono text-sm">HEALTH SCORE</span>
                <span className="text-green-400 font-mono font-bold">92/100</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={`/customers/${customer.id}/edit`}>
            <Button className="cyber-button">
              <Edit className="w-4 h-4 mr-2" />
              EDIT CUSTOMER
            </Button>
          </Link>
          <Button className="cyber-button">
            <Mail className="w-4 h-4 mr-2" />
            SEND EMAIL
          </Button>
          <Button className="cyber-button">
            <DollarSign className="w-4 h-4 mr-2" />
            VIEW BILLING
          </Button>
          <Link href="/customers">
            <Button variant="outline" className="cyber-button bg-transparent">
              BACK TO CUSTOMERS
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
