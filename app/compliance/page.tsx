import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Globe, CheckCircle, Award } from "lucide-react"
import Link from "next/link"

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Security, availability, and confidentiality controls",
    status: "Certified",
    validUntil: "December 2024",
    icon: Shield,
  },
  {
    name: "ISO 27001",
    description: "Information security management system",
    status: "Certified",
    validUntil: "March 2025",
    icon: Award,
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    status: "Compliant",
    validUntil: "Ongoing",
    icon: Globe,
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance",
    status: "Compliant",
    validUntil: "Ongoing",
    icon: FileText,
  },
]

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">COMPLIANCE</h1>
          <p className="text-yellow-600 font-mono">Regulatory compliance and certifications</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">COMPLIANCE</span>
        </div>

        {/* Compliance Overview */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <CheckCircle className="w-16 h-16 text-green-400" />
              <div>
                <h2 className="text-3xl font-bold text-yellow-300 font-mono">FULLY COMPLIANT</h2>
                <p className="text-yellow-600 font-mono">Meeting global regulatory standards</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">4</div>
                <div className="text-sm text-yellow-600 font-mono">CERTIFICATIONS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">100%</div>
                <div className="text-sm text-yellow-600 font-mono">AUDIT SCORE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 font-mono">0</div>
                <div className="text-sm text-yellow-600 font-mono">VIOLATIONS</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Standards */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">COMPLIANCE STANDARDS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-black/30 rounded-lg border border-yellow-500/20"
                >
                  <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow">
                    <standard.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-yellow-300 font-mono">{standard.name}</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">{standard.status}</Badge>
                    </div>
                    <p className="text-sm text-yellow-600 font-mono mb-2">{standard.description}</p>
                    <p className="text-xs text-yellow-500 font-mono">Valid until: {standard.validUntil}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">DATA PROTECTION COMPLIANCE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">GDPR COMPLIANCE</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We are fully compliant with the General Data Protection Regulation (GDPR). Users have the right to
                access, rectify, erase, and port their personal data. We implement privacy by design and conduct regular
                data protection impact assessments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">CCPA COMPLIANCE</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We comply with the California Consumer Privacy Act (CCPA), providing California residents with rights
                regarding their personal information, including the right to know, delete, and opt-out of the sale of
                personal information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-300 font-mono mb-3">DATA RETENTION</h3>
              <p className="text-yellow-600 font-mono text-sm leading-relaxed">
                We maintain clear data retention policies and automatically delete personal data when it is no longer
                necessary for the purposes for which it was collected, in accordance with applicable laws and
                regulations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Audit Reports */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">AUDIT REPORTS</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-600 font-mono text-sm leading-relaxed mb-4">
              Our compliance audit reports are available to enterprise customers upon request. These reports provide
              detailed information about our security controls, compliance status, and audit findings.
            </p>
            <div className="space-y-2">
              <p className="text-yellow-300 font-mono">
                <strong>SOC 2 Type II Report:</strong> Available to customers under NDA
              </p>
              <p className="text-yellow-300 font-mono">
                <strong>ISO 27001 Certificate:</strong> Public certificate available
              </p>
              <p className="text-yellow-300 font-mono">
                <strong>Penetration Test Reports:</strong> Available to enterprise customers
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
