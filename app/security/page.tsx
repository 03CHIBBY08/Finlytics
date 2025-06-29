import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Key, Eye, Server, CheckCircle } from "lucide-react"
import Link from "next/link"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest using AES-256",
    status: "active",
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description: "Additional security layer with TOTP and SMS verification",
    status: "active",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "SOC 2 Type II compliant data centers with 24/7 monitoring",
    status: "active",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive logging of all system access and changes",
    status: "active",
  },
]

const certifications = [
  { name: "SOC 2 Type II", status: "Certified", date: "2024" },
  { name: "ISO 27001", status: "Certified", date: "2024" },
  { name: "GDPR Compliant", status: "Compliant", date: "2024" },
  { name: "CCPA Compliant", status: "Compliant", date: "2024" },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">SECURITY</h1>
          <p className="text-yellow-600 font-mono">Enterprise-grade security and compliance</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">SECURITY</span>
        </div>

        {/* Security Overview */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-16 h-16 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold text-yellow-300 font-mono">ENTERPRISE SECURITY</h2>
                <p className="text-yellow-600 font-mono">Bank-level security for your financial data</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">256-bit</div>
                <div className="text-sm text-yellow-600 font-mono">AES ENCRYPTION</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">99.9%</div>
                <div className="text-sm text-yellow-600 font-mono">UPTIME SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">24/7</div>
                <div className="text-sm text-yellow-600 font-mono">MONITORING</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">SECURITY FEATURES</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-yellow-300 font-mono">{feature.title}</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">ACTIVE</Badge>
                    </div>
                    <p className="text-sm text-yellow-600 font-mono">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance & Certifications */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">COMPLIANCE & CERTIFICATIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <h3 className="font-bold text-yellow-300 font-mono">{cert.name}</h3>
                      <p className="text-sm text-yellow-600 font-mono">{cert.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">{cert.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Practices */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">SECURITY PRACTICES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">DATA ENCRYPTION</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                All data is encrypted using AES-256 encryption both in transit and at rest. We use TLS 1.3 for all
                communications and maintain separate encryption keys for different data types.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">ACCESS CONTROLS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We implement role-based access controls (RBAC) with principle of least privilege. All access is logged
                and monitored, with regular access reviews and automated deprovisioning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">INFRASTRUCTURE SECURITY</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                Our infrastructure is hosted in SOC 2 Type II certified data centers with 24/7 physical security,
                environmental controls, and redundant power and network connections.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">INCIDENT RESPONSE</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We maintain a comprehensive incident response plan with 24/7 monitoring, automated threat detection, and
                a dedicated security team ready to respond to any security incidents.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Contact */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">SECURITY CONTACT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-600 font-mono text-sm leading-relaxed mb-4">
              If you discover a security vulnerability or have security concerns, please contact our security team
              immediately.
            </p>
            <div className="space-y-2">
              <p className="text-yellow-300 font-mono">
                <strong>Email:</strong> security@finlytics.com
              </p>
              <p className="text-yellow-300 font-mono">
                <strong>PGP Key:</strong> Available upon request
              </p>
              <p className="text-yellow-300 font-mono">
                <strong>Response Time:</strong> Within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
