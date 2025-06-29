"use client"

import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function Footer() {
  const { toast } = useToast()

  const handleSocialClick = (platform: string, url: string) => {
    toast({
      title: "Social Link",
      description: `Opening ${platform} in new tab...`,
    })
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleContactClick = () => {
    toast({
      title: "Contact Info",
      description: "Opening email client...",
    })
    window.location.href = "mailto:contact@finlytics.com"
  }

  return (
    <footer className="bg-black/80 border-t border-yellow-500/30 mt-16 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400 font-mono">FINLYTICS</h3>
            <p className="text-sm text-yellow-600 font-mono">
              Neural business intelligence platform for the future of finance.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="cyber-button p-2"
                onClick={() => handleSocialClick("LinkedIn", "https://linkedin.com/company/finlytics")}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cyber-button p-2"
                onClick={() => handleSocialClick("GitHub", "https://github.com/finlytics")}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cyber-button p-2"
                onClick={() => handleSocialClick("Twitter", "https://twitter.com/finlytics")}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cyber-button p-2" onClick={handleContactClick}>
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-400 font-mono">QUICK ACCESS</h4>
            <div className="space-y-2">
              <Link
                href="/analytics"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Analytics
              </Link>
              <Link
                href="/reports"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Reports
              </Link>
              <Link
                href="/customers"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Customers
              </Link>
              <Link
                href="/revenue"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Revenue
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-400 font-mono">SUPPORT</h4>
            <div className="space-y-2">
              <Link
                href="/help"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/docs"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/api"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="/status"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                System Status
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-400 font-mono">LEGAL</h4>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/security"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Security
              </Link>
              <Link
                href="/compliance"
                className="block text-sm text-yellow-600 hover:text-yellow-400 font-mono transition-colors"
              >
                Compliance
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/30 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-yellow-600 font-mono">
            © 2025 Finlytics. All rights reserved. Neural Intelligence v2.1
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-yellow-600 font-mono">System Status:</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-mono">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
