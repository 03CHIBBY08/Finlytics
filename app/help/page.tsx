import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, HelpCircle, Book, MessageCircle, Video, FileText } from "lucide-react"
import Link from "next/link"

const helpTopics = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of Finlytics platform",
    articles: 12,
    link: "/help/getting-started",
  },
  {
    icon: MessageCircle,
    title: "Account Management",
    description: "Manage your account settings and preferences",
    articles: 8,
    link: "/help/account",
  },
  {
    icon: Video,
    title: "Analytics & Reports",
    description: "Understanding your data and generating reports",
    articles: 15,
    link: "/help/analytics",
  },
  {
    icon: FileText,
    title: "Billing & Payments",
    description: "Payment methods, invoices, and billing cycles",
    articles: 6,
    link: "/help/billing",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">HELP CENTER</h1>
          <p className="text-yellow-600 font-mono">Neural assistance and documentation</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">HELP</span>
        </div>

        {/* Search */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardContent className="p-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 w-5 h-5" />
              <Input
                placeholder="Search help articles..."
                className="pl-12 bg-black/50 border-yellow-500/30 text-yellow-300 placeholder-yellow-600 text-lg h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Help Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow hover:glow-yellow-strong transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-500/20 rounded-lg glow-yellow">
                      <topic.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-yellow-300 font-mono mb-2">{topic.title}</h3>
                      <p className="text-sm text-yellow-600 font-mono mb-3">{topic.description}</p>
                      <div className="text-xs text-yellow-500 font-mono">{topic.articles} articles</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono text-center">NEED MORE HELP?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-yellow-600 font-mono">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="cyber-button">
                <MessageCircle className="w-4 h-4 mr-2" />
                LIVE CHAT
              </Button>
              <Button className="cyber-button">
                <HelpCircle className="w-4 h-4 mr-2" />
                SUBMIT TICKET
              </Button>
              <Button className="cyber-button">
                <Video className="w-4 h-4 mr-2" />
                SCHEDULE CALL
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
