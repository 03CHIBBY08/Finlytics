"use client"

import { useState } from "react"
import { Search, Filter, Download, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { exportToCSV } from "@/lib/export-utils"
import { useToast } from "@/hooks/use-toast"

const transactions = [
  {
    id: 1,
    customer: { name: "Acme Corp", avatar: "/placeholder.svg?height=32&width=32", initials: "AC" },
    product: "Enterprise Plan",
    amount: 125000,
    status: "Paid",
    region: "Mumbai",
    date: "2024-01-15",
    email: "contact@acme.com",
    invoice: "INV-001",
  },
  {
    id: 2,
    customer: { name: "TechStart Inc", avatar: "/placeholder.svg?height=32&width=32", initials: "TS" },
    product: "Pro Plan",
    amount: 45000,
    status: "Pending",
    region: "Bangalore",
    date: "2024-01-14",
    email: "hello@techstart.com",
    invoice: "INV-002",
  },
  {
    id: 3,
    customer: { name: "Digital Solutions", avatar: "/placeholder.svg?height=32&width=32", initials: "DS" },
    product: "Basic Plan",
    amount: 15000,
    status: "Paid",
    region: "Delhi",
    date: "2024-01-13",
    email: "info@digitalsol.com",
    invoice: "INV-003",
  },
  {
    id: 4,
    customer: { name: "Innovation Labs", avatar: "/placeholder.svg?height=32&width=32", initials: "IL" },
    product: "Add-ons",
    amount: 8500,
    status: "Refunded",
    region: "Pune",
    date: "2024-01-12",
    email: "team@innovlabs.com",
    invoice: "INV-004",
  },
  {
    id: 5,
    customer: { name: "Future Systems", avatar: "/placeholder.svg?height=32&width=32", initials: "FS" },
    product: "Enterprise Plan",
    amount: 125000,
    status: "Paid",
    region: "Chennai",
    date: "2024-01-11",
    email: "contact@futuresys.com",
    invoice: "INV-005",
  },
]

export function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const { toast } = useToast()

  const handleExportCSV = () => {
    try {
      const exportData = transactions.map((transaction) => ({
        ID: transaction.id,
        Customer: transaction.customer.name,
        Email: transaction.email,
        Product: transaction.product,
        Amount: transaction.amount,
        Status: transaction.status,
        Region: transaction.region,
        Date: transaction.date,
        Invoice: transaction.invoice,
      }))

      exportToCSV(exportData, `transactions-${new Date().toISOString().split("T")[0]}.csv`)

      toast({
        title: "Export Successful",
        description: "Transactions exported to CSV successfully!",
      })
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export transactions. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleSendInvoice = (transaction: any) => {
    toast({
      title: "Invoice Sent",
      description: `Invoice ${transaction.invoice} sent to ${transaction.customer.name}`,
    })
  }

  const handleRefund = (transaction: any) => {
    toast({
      title: "Refund Initiated",
      description: `Refund of ₹${transaction.amount.toLocaleString()} initiated for ${transaction.customer.name}`,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
      case "Pending":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Refunded":
        return "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"
    }
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || transaction.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>

            {/* Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  Status: {statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter("All")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Paid")}>Paid</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Pending")}>Pending</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Refunded")}>Refunded</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Export */}
            <Button className="gap-2" onClick={handleExportCSV}>
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={transaction.customer.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{transaction.customer.initials}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{transaction.customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{transaction.product}</TableCell>
                  <TableCell className="font-semibold">₹{transaction.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                  </TableCell>
                  <TableCell>{transaction.region}</TableCell>
                  <TableCell className="text-slate-500">{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => window.open(`/transactions/${transaction.id}`, "_blank")}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleSendInvoice(transaction)}>Send Invoice</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => handleRefund(transaction)}>
                          Refund
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
