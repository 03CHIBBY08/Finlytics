import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Globe, Key, Zap } from "lucide-react"
import Link from "next/link"

const endpoints = [
  {
    method: "GET",
    path: "/v1/revenue",
    description: "Get revenue metrics and analytics",
    auth: true,
  },
  {
    method: "GET",
    path: "/v1/customers",
    description: "List all customers with pagination",
    auth: true,
  },
  {
    method: "POST",
    path: "/v1/customers",
    description: "Create a new customer record",
    auth: true,
  },
  {
    method: "GET",
    path: "/v1/transactions",
    description: "Get transaction history",
    auth: true,
  },
  {
    method: "GET",
    path: "/v1/analytics",
    description: "Get advanced analytics data",
    auth: true,
  },
  {
    method: "GET",
    path: "/v1/reports",
    description: "Generate and download reports",
    auth: true,
  },
]

export default function APIPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">API REFERENCE</h1>
          <p className="text-yellow-600 font-mono">RESTful API for Finlytics platform</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">API</span>
        </div>

        {/* API Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">BASE URL</div>
              <div className="text-sm text-yellow-600 font-mono">https://api.finlytics.com</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Key className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">AUTH</div>
              <div className="text-sm text-yellow-600 font-mono">Bearer Token</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">RATE LIMIT</div>
              <div className="text-sm text-yellow-600 font-mono">1000 req/hour</div>
            </CardContent>
          </Card>
        </div>

        {/* Authentication */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">AUTHENTICATION</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-600 font-mono mb-4">
              All API requests require authentication using a Bearer token in the Authorization header.
            </p>
            <div className="bg-black/70 rounded-lg p-4 border border-yellow-500/20">
              <pre className="text-yellow-300 font-mono text-sm">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Endpoints */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">ENDPOINTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <Badge
                      className={`font-mono ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-400 border-green-500/50"
                          : "bg-blue-500/20 text-blue-400 border-blue-500/50"
                      }`}
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-yellow-300 font-mono">{endpoint.path}</code>
                    <span className="text-yellow-600 font-mono text-sm">{endpoint.description}</span>
                  </div>
                  {endpoint.auth && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 font-mono">AUTH</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Response Format */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">RESPONSE FORMAT</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/70 rounded-lg p-4 border border-yellow-500/20">
              <pre className="text-yellow-300 font-mono text-sm overflow-x-auto">
                <code>{`{
  "success": true,
  "data": {
    "total_revenue": 1500000,
    "monthly_growth": 12.5,
    "active_customers": 2847
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/docs">
            <Button className="cyber-button">
              <Code className="w-4 h-4 mr-2" />
              FULL DOCUMENTATION
            </Button>
          </Link>
          <Link href="/settings">
            <Button className="cyber-button">
              <Key className="w-4 h-4 mr-2" />
              GET API KEY
            </Button>
          </Link>
          <Button className="cyber-button">
            <Globe className="w-4 h-4 mr-2" />
            TEST API
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
