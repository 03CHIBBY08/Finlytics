import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-yellow-500/30 bg-black/80 backdrop-blur-xl mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400 font-mono">FINLYTICS</h3>
            <p className="text-sm text-yellow-600">
              Neural Business Intelligence platform powered by quantum analytics for next-generation financial insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-yellow-400 font-mono">PRODUCT</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/analytics" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/customers" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/revenue" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Revenue
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-yellow-400 font-mono">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-yellow-400 font-mono">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-yellow-600 font-mono">
            © 2024 Finlytics. All rights reserved. Neural Intelligence Platform.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/status" className="text-sm text-yellow-600 hover:text-yellow-400 transition-colors">
              System Status
            </Link>
            <div className="w-2 h-2 rounded-full bg-green-400 pulse-yellow"></div>
            <span className="text-xs text-green-400 font-mono">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
