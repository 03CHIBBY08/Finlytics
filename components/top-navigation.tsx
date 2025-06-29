"use client"

import { useState, useEffect } from "react"
import { Bell, Moon, Sun, ChevronDown, Globe, Zap, Activity, Wifi, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function TopNavigation() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState("EN")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [systemStatus, setSystemStatus] = useState("ONLINE")

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <>
      {/* Matrix rain background */}
      <div className="matrix-rain" />

      {/* Data streams */}
      <div className="data-stream" style={{ left: "10%", animationDelay: "0s" }} />
      <div className="data-stream" style={{ left: "30%", animationDelay: "1s" }} />
      <div className="data-stream" style={{ left: "70%", animationDelay: "2s" }} />
      <div className="data-stream" style={{ left: "90%", animationDelay: "0.5s" }} />

      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-yellow-500/30 glow-yellow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center glow-yellow-strong pulse-yellow">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-yellow-400 cyber-grid">FINLYTICS</h1>
                <p className="text-xs text-yellow-600 font-mono">NEURAL INTELLIGENCE v2.1</p>
              </div>
            </Link>

            {/* System Status */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs font-mono">
                <Activity className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400">SYS:</span>
                <span className="text-yellow-300">{systemStatus}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono">
                <Wifi className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400">NET:</span>
                <span className="text-yellow-300">SECURE</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono">
                <Battery className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400">PWR:</span>
                <span className="text-yellow-300">100%</span>
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Real-time Clock */}
              <div className="hidden md:block text-xs font-mono text-yellow-400 neon-border px-3 py-1 rounded">
                {currentTime.toLocaleTimeString()}
              </div>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="cyber-button gap-2">
                    <Globe className="w-4 h-4" />
                    {language}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 border-yellow-500/30 backdrop-blur-xl">
                  <DropdownMenuItem
                    onClick={() => setLanguage("EN")}
                    className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("HI")}
                    className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10"
                  >
                    हिंदी
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="cyber-button w-10 h-10 p-0">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Notifications */}
              <Link href="/notifications">
                <Button variant="ghost" size="sm" className="cyber-button relative w-10 h-10 p-0">
                  <Bell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-yellow-500 text-black hover:bg-yellow-500 pulse-yellow">
                    3
                  </Badge>
                </Button>
              </Link>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="cyber-button gap-3 p-3">
                    <Avatar className="w-8 h-8 neon-border">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-yellow-500/20 text-yellow-400">JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-yellow-400">ADMIN_USER</p>
                      <p className="text-xs text-yellow-600 font-mono">LVL_9_ACCESS</p>
                    </div>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/90 border-yellow-500/30 backdrop-blur-xl">
                  <Link href="/profile">
                    <DropdownMenuItem className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                      Neural Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/team">
                    <DropdownMenuItem className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                      Team Matrix
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/billing">
                    <DropdownMenuItem className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                      Quantum Billing
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                      System Settings
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    System Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
