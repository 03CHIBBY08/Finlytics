import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">TERMS OF SERVICE</h1>
          <p className="text-yellow-600 font-mono">Legal terms and conditions for using Finlytics</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">TERMS</span>
        </div>

        {/* Terms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">SERVICE TERMS</div>
              <div className="text-sm text-yellow-600 font-mono">Usage guidelines</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Scale className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">LIABILITY</div>
              <div className="text-sm text-yellow-600 font-mono">Legal limitations</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">INTELLECTUAL PROPERTY</div>
              <div className="text-sm text-yellow-600 font-mono">Rights protection</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-yellow-300 font-mono">TERMINATION</div>
              <div className="text-sm text-yellow-600 font-mono">Account closure</div>
            </CardContent>
          </Card>
        </div>

        {/* Terms Content */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">TERMS OF SERVICE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">1. ACCEPTANCE OF TERMS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                By accessing and using Finlytics services, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">2. USE LICENSE</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                Permission is granted to temporarily use Finlytics for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not modify or
                copy the materials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">3. DISCLAIMER</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                The materials on Finlytics are provided on an 'as is' basis. Finlytics makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">4. LIMITATIONS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                In no event shall Finlytics or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Finlytics, even if Finlytics or a Finlytics authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">5. ACCURACY OF MATERIALS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                The materials appearing on Finlytics could include technical, typographical, or photographic errors.
                Finlytics does not warrant that any of the materials on its website are accurate, complete, or current.
                Finlytics may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">6. MODIFICATIONS</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                Finlytics may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
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
