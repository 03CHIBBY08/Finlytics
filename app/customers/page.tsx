"use client"

import { useState } from "react"
import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Users, Search, Plus, Eye, Edit, Trash2, Download } from "lucide-react"
import { exportToCSV } from "@/lib/export-utils"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const customers = [
  {
    id: 1,
    name: "Acme Corp",
    email: "contact@acme.com",
    plan: "ENTERPRISE_CORE",
    status: "ACTIVE",
    revenue: 125000,
    joinDate: "2023-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+91 98765 43210",
    industry: "Technology",
  },
  {
    id: 2,
    name: "TechStart Inc",
    email: "hello@techstart.com",
    plan: "PRO_MATRIX",
    status: "ACTIVE",
    revenue: 45000,
    joinDate: "2023-02-20",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+91 98765 43211",
    industry: "Startup",
  },
  {
    id: 3,
    name: "Digital Solutions",
    email: "info@digitalsol.com",
    plan: "BASIC_NODE",
    status: "TRIAL",
    revenue: 15000,
    joinDate: "2023-03-10",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+91 98765 43212",
    industry: "Consulting",
  },
  {
    id: 4,
    name: "Innovation Labs",
    email: "team@innovlabs.com",
    plan: "PRO_MATRIX",
    status: "CHURNED",
    revenue: 8500,
    joinDate: "2023-01-05",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+91 98765 43213",
    industry: "Research",
  },
  {
    id: 5,
    name: "Future Systems",
    email: "contact@futuresys.com",
    plan: "ENTERPRISE_CORE",
    status: "ACTIVE",
    revenue: 125000,
    joinDate: "2023-04-12",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+91 98765 43214",
    industry: "Manufacturing",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const { toast } = useToast()

  const handleExportCustomers = () => {
    try {
      const exportData = customers.map((customer) => ({
        ID: customer.id,
        Name: customer.name,
        Email: customer.email,
        Phone: customer.phone,
        Plan: customer.plan,
        Status: customer.status,
        Revenue: customer.revenue,
        Industry: customer.industry,
        JoinDate: customer.joinDate,
      }))

      exportToCSV(exportData, `customers-${new Date().toISOString().split("T")[0]}.csv`)

      toast({
        title: "Export Successful",
        description: "Customer data exported to CSV successfully!",
      })
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export customer data. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteCustomer = (customer: any) => {
    toast({
      title: "Customer Deleted",
      description: `${customer.name} has been removed from the system.`,
      variant: "destructive",
    })
  }

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-2 glow-yellow-strong">CUSTOMER MATRIX</h1>
            <p className="text-yellow-600 font-mono">Neural customer relationship management</p>
          </div>
          <div className="flex gap-2">
            <Button className="cyber-button" onClick={handleExportCustomers}>
              <Download className="w-4 h-4 mr-2" />
              EXPORT CSV
            </Button>
            <Link href="/customers/add">
              <Button className="cyber-button">
                <Plus className="w-4 h-4 mr-2" />
                ADD CUSTOMER
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">CUSTOMERS</span>
        </div>

        {/* Search and Filter */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 w-4 h-4" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/50 border-yellow-500/30 text-yellow-300 placeholder-yellow-600"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-yellow-500/30 rounded-md text-yellow-300 font-mono"
              >
                <option value="All">All Status</option>
                <option value="ACTIVE">Active</option>
                <option value="TRIAL">Trial</option>
                <option value="CHURNED">Churned</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-300 font-mono">{customers.length}</div>
              <div className="text-sm text-yellow-600 font-mono">TOTAL CUSTOMERS</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">
                {customers.filter((c) => c.status === "ACTIVE").length}
              </div>
              <div className="text-sm text-yellow-600 font-mono">ACTIVE</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">
                {customers.filter((c) => c.status === "TRIAL").length}
              </div>
              <div className="text-sm text-yellow-600 font-mono">TRIAL</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-300 font-mono">
                {customers.filter((c) => c.status === "CHURNED").length}
              </div>
              <div className="text-sm text-yellow-600 font-mono">CHURNED</div>
            </CardContent>
          </Card>
        </div>

        {/* Customer List */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">CUSTOMER DATABASE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 neon-border">
                      <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-yellow-500/20 text-yellow-400">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-yellow-300 font-mono">{customer.name}</h3>
                      <p className="text-sm text-yellow-600 font-mono">{customer.email}</p>
                      <p className="text-xs text-yellow-600 font-mono">{customer.phone}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
                          {customer.plan}
                        </Badge>
                        <Badge
                          className={`text-xs ${
                            customer.status === "ACTIVE"
                              ? "bg-green-500/20 text-green-400 border-green-500/50"
                              : customer.status === "TRIAL"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                                : "bg-red-500/20 text-red-400 border-red-500/50"
                          }`}
                        >
                          {customer.status}
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs">
                          {customer.industry}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300 font-mono">
                      ₹{customer.revenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-yellow-600 font-mono">Joined: {customer.joinDate}</div>
                    <div className="flex space-x-2 mt-2">
                      <Link href={`/customers/${customer.id}`}>
                        <Button size="sm" className="cyber-button p-2">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={`/customers/${customer.id}/edit`}>
                        <Button size="sm" className="cyber-button p-2">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="cyber-button p-2 hover:bg-red-500/20"
                        onClick={() => handleDeleteCustomer(customer)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/customers/segments">
            <Button className="cyber-button">CUSTOMER SEGMENTS</Button>
          </Link>
          <Link href="/customers/analytics">
            <Button className="cyber-button">CUSTOMER ANALYTICS</Button>
          </Link>
          <Button className="cyber-button" onClick={handleExportCustomers}>
            EXPORT CUSTOMERS
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
