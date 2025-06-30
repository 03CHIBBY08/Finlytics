"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  Activity,
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Zap,
} from "lucide-react"

export function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Reports", href: "/reports", icon: FileText },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Revenue", href: "/revenue", icon: DollarSign },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/30 cyber-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold neon-text">FINLYTICS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* System Status */}
            <div className="hidden lg:flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-400 neural-pulse" />
              <Badge variant="outline" className="border-green-400/50 text-green-400">
                LIVE
              </Badge>
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-black font-bold">3</span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/95 border-yellow-400/30">
                <DropdownMenuLabel className="text-yellow-400">System Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-yellow-400/30" />
                <DropdownMenuItem className="hover:bg-yellow-400/10">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Revenue Alert</p>
                    <p className="text-xs text-gray-400">Monthly target exceeded by 15%</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-yellow-400/10">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">AI Analysis Complete</p>
                    <p className="text-xs text-gray-400">New insights available for Q4 forecast</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-yellow-400/10">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">System Update</p>
                    <p className="text-xs text-gray-400">Neural network optimization completed</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 border-2 border-yellow-400/50">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-yellow-400 text-black">AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/95 border-yellow-400/30">
                <DropdownMenuLabel className="text-yellow-400">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-gray-400">admin@finlytics.ai</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-yellow-400/30" />
                <DropdownMenuItem className="hover:bg-yellow-400/10">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-yellow-400/10">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-yellow-400/30" />
                <DropdownMenuItem className="hover:bg-red-400/10 text-red-400">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-400/30">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
