import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, Calendar, Zap, Crown, Shield } from "lucide-react"
import Link from "next/link"

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">QUANTUM BILLING</h1>
          <p className="text-yellow-600 font-mono">Neural payment management system</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">BILLING</span>
        </div>

        {/* Current Plan */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <Crown className="w-5 h-5" />
              CURRENT PLAN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 font-mono">ENTERPRISE CORE</h3>
                <p className="text-yellow-600 font-mono">Advanced neural intelligence suite</p>
                <div className="flex items-center space-x-4 mt-4">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">ACTIVE</Badge>
                  <span className="text-sm text-yellow-600 font-mono">Next billing: Jan 15, 2024</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-yellow-300 font-mono">₹12,500</div>
                <div className="text-sm text-yellow-600 font-mono">/month</div>
                <Button className="cyber-button mt-4">UPGRADE PLAN</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-400 font-mono">API CALLS</span>
                <span className="text-yellow-300 font-mono">85%</span>
              </div>
              <Progress value={85} className="mb-2" />
              <div className="text-sm text-yellow-600 font-mono">8,500 / 10,000</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-400 font-mono">STORAGE</span>
                <span className="text-yellow-300 font-mono">62%</span>
              </div>
              <Progress value={62} className="mb-2" />
              <div className="text-sm text-yellow-600 font-mono">62 GB / 100 GB</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-400 font-mono">USERS</span>
                <span className="text-yellow-300 font-mono">40%</span>
              </div>
              <Progress value={40} className="mb-2" />
              <div className="text-sm text-yellow-600 font-mono">12 / 30</div>
            </CardContent>
          </Card>
        </div>

        {/* Available Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Shield className="w-5 h-5" />
                BASIC NODE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono mb-4">₹2,500</div>
              <ul className="space-y-2 text-sm text-yellow-600 font-mono">
                <li>• 1,000 API calls/month</li>
                <li>• 10 GB storage</li>
                <li>• 5 team members</li>
                <li>• Basic analytics</li>
              </ul>
              <Button className="cyber-button w-full mt-6">SELECT PLAN</Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow-strong">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Zap className="w-5 h-5" />
                PRO MATRIX
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">POPULAR</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono mb-4">₹7,500</div>
              <ul className="space-y-2 text-sm text-yellow-600 font-mono">
                <li>• 5,000 API calls/month</li>
                <li>• 50 GB storage</li>
                <li>• 15 team members</li>
                <li>• Advanced analytics</li>
                <li>• AI forecasting</li>
              </ul>
              <Button className="cyber-button w-full mt-6">SELECT PLAN</Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-mono rounded-bl-lg">
              CURRENT
            </div>
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Crown className="w-5 h-5" />
                ENTERPRISE CORE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-300 font-mono mb-4">₹12,500</div>
              <ul className="space-y-2 text-sm text-yellow-600 font-mono">
                <li>• 10,000 API calls/month</li>
                <li>• 100 GB storage</li>
                <li>• 30 team members</li>
                <li>• Full analytics suite</li>
                <li>• AI forecasting</li>
                <li>• Priority support</li>
              </ul>
              <Button className="cyber-button w-full mt-6" disabled>
                CURRENT PLAN
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              PAYMENT METHOD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <CreditCard className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-300 font-mono">**** **** **** 4242</h3>
                  <p className="text-sm text-yellow-600 font-mono">Expires 12/25</p>
                </div>
              </div>
              <Button className="cyber-button">UPDATE</Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-yellow-400 font-mono">BILLING HISTORY</CardTitle>
              <Button className="cyber-button">
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD ALL
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Dec 15, 2023", amount: "₹12,500", status: "PAID", invoice: "INV-001" },
                { date: "Nov 15, 2023", amount: "₹12,500", status: "PAID", invoice: "INV-002" },
                { date: "Oct 15, 2023", amount: "₹12,500", status: "PAID", invoice: "INV-003" },
              ].map((bill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h3 className="font-semibold text-yellow-300 font-mono">{bill.date}</h3>
                      <p className="text-sm text-yellow-600 font-mono">{bill.invoice}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-yellow-300 font-mono">{bill.amount}</div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">{bill.status}</Badge>
                  </div>
                  <Button size="sm" className="cyber-button">
                    <Download className="w-4 h-4" />
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
