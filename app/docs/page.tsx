import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Book, Zap, Database, Shield, Globe } from "lucide-react"
import Link from "next/link"

const docSections = [
  {
    icon: Book,
    title: "API Documentation",
    description: "Complete API reference and integration guides",
    items: ["Authentication", "Endpoints", "Rate Limits", "SDKs"],
    link: "/docs/api",
  },
  {
    icon: Code,
    title: "Developer Guides",
    description: "Step-by-step tutorials and code examples",
    items: ["Quick Start", "Webhooks", "Custom Integrations", "Best Practices"],
    link: "/docs/guides",
  },
  {
    icon: Database,
    title: "Data Models",
    description: "Understanding Finlytics data structures",
    items: ["Customer Data", "Revenue Models", "Analytics Schema", "Export Formats"],
    link: "/docs/data",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security protocols and compliance information",
    items: ["Data Encryption", "Access Control", "Compliance", "Audit Logs"],
    link: "/docs/security",
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">DOCUMENTATION</h1>
          <p className="text-yellow-600 font-mono">Technical documentation and developer resources</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">DOCS</span>
        </div>

        {/* Quick Start */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <Zap className="w-5 h-5" />
              QUICK START
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 glow-yellow">
                  <span className="text-yellow-400 font-mono font-bold">1</span>
                </div>
                <h3 className="font-bold text-yellow-300 font-mono mb-2">GET API KEY</h3>
                <p className="text-sm text-yellow-600 font-mono">Generate your API key from settings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 glow-yellow">
                  <span className="text-yellow-400 font-mono font-bold">2</span>
                </div>
                <h3 className="font-bold text-yellow-300 font-mono mb-2">MAKE REQUEST</h3>
                <p className="text-sm text-yellow-600 font-mono">Send your first API request</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 glow-yellow">
                  <span className="text-yellow-400 font-mono font-bold">3</span>
                </div>
                <h3 className="font-bold text-yellow-300 font-mono mb-2">BUILD APP</h3>
                <p className="text-sm text-yellow-600 font-mono">Start building your integration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docSections.map((section, index) => (
            <Link key={index} href={section.link}>
              <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow">
                      <section.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">{section.title}</h3>
                      <p className="text-sm text-yellow-600 font-mono mb-4">{section.description}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-xs text-yellow-500 font-mono">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Code Example */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono">EXAMPLE REQUEST</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/70 rounded-lg p-4 border border-yellow-500/20">
              <pre className="text-yellow-300 font-mono text-sm overflow-x-auto">
                <code>{`curl -X GET "https://api.finlytics.com/v1/revenue" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

{
  "total_revenue": 1500000,
  "monthly_growth": 12.5,
  "active_customers": 2847,
  "churn_rate": 3.2
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/docs/api">
            <Button className="cyber-button">
              <Globe className="w-4 h-4 mr-2" />
              API REFERENCE
            </Button>
          </Link>
          <Link href="/docs/guides">
            <Button className="cyber-button">
              <Book className="w-4 h-4 mr-2" />
              DEVELOPER GUIDES
            </Button>
          </Link>
          <Link href="/docs/examples">
            <Button className="cyber-button">
              <Code className="w-4 h-4 mr-2" />
              CODE EXAMPLES
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
