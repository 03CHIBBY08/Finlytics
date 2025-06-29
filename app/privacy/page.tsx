import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">PRIVACY POLICY</h1>
          <p className="text-yellow-600 font-mono">How we protect and handle your data</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">PRIVACY</span>
        </div>

        {/* Privacy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">DATA PROTECTION</div>
              <div className="text-sm text-yellow-600 font-mono">End-to-end encryption</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Lock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">SECURE STORAGE</div>
              <div className="text-sm text-yellow-600 font-mono">SOC 2 compliant</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">TRANSPARENCY</div>
              <div className="text-sm text-yellow-600 font-mono">Clear data usage</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">YOUR CONTROL</div>
              <div className="text-sm text-yellow-600 font-mono">Data portability</div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Policy Content */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">PRIVACY POLICY</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">1. INFORMATION WE COLLECT</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, use our services,
                or contact us for support. This includes your name, email address, company information, and usage data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">2. HOW WE USE YOUR INFORMATION</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                send communications, and ensure security. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">3. DATA SECURITY</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We implement industry-standard security measures including encryption, secure data centers, regular
                security audits, and access controls to protect your information from unauthorized access or disclosure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">4. YOUR RIGHTS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                You have the right to access, update, or delete your personal information. You can also request data
                portability or object to certain processing activities. Contact us to exercise these rights.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">5. CONTACT US</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at
                privacy@finlytics.com or through our support channels.
              </p>
            </div>

            <div className="border-t border-yellow-500/30 pt-6">
              <p className="text-yellow-500 font-mono text-xs">
                Last updated: January 15, 2024 | Effective Date: January 15, 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
