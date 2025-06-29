import { TopNavigation } from "@/components/top-navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Settings, User, Shield, Bell, Palette, Database, Zap } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern pointer-events-none" />

      <TopNavigation />

      <main className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 font-mono mb-4 glow-yellow-strong">SYSTEM SETTINGS</h1>
          <p className="text-yellow-600 font-mono">Neural configuration matrix</p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            DASHBOARD
          </Link>
          <span className="text-yellow-600">/</span>
          <span className="text-yellow-400">SETTINGS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono">CONFIGURATION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/settings/profile">
                <Button variant="ghost" className="w-full justify-start cyber-button">
                  <User className="w-4 h-4 mr-2" />
                  PROFILE
                </Button>
              </Link>
              <Link href="/settings/security">
                <Button variant="ghost" className="w-full justify-start cyber-button">
                  <Shield className="w-4 h-4 mr-2" />
                  SECURITY
                </Button>
              </Link>
              <Link href="/settings/notifications">
                <Button variant="ghost" className="w-full justify-start cyber-button">
                  <Bell className="w-4 h-4 mr-2" />
                  NOTIFICATIONS
                </Button>
              </Link>
              <Link href="/settings/appearance">
                <Button variant="ghost" className="w-full justify-start cyber-button">
                  <Palette className="w-4 h-4 mr-2" />
                  APPEARANCE
                </Button>
              </Link>
              <Link href="/settings/integrations">
                <Button variant="ghost" className="w-full justify-start cyber-button">
                  <Database className="w-4 h-4 mr-2" />
                  INTEGRATIONS
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Main Settings */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Settings */}
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                  <User className="w-5 h-5" />
                  PROFILE CONFIGURATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-yellow-400 font-mono">FULL NAME</Label>
                    <Input defaultValue="John Doe" className="bg-black/50 border-yellow-500/30 text-yellow-300" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-yellow-400 font-mono">EMAIL</Label>
                    <Input
                      defaultValue="john@finlytics.com"
                      className="bg-black/50 border-yellow-500/30 text-yellow-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-yellow-400 font-mono">ROLE</Label>
                    <Input
                      defaultValue="ADMIN_USER"
                      disabled
                      className="bg-black/50 border-yellow-500/30 text-yellow-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-yellow-400 font-mono">ACCESS LEVEL</Label>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">LVL_9_ACCESS</Badge>
                  </div>
                </div>
                <Button className="cyber-button">UPDATE PROFILE</Button>
              </CardContent>
            </Card>

            {/* System Preferences */}
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  SYSTEM PREFERENCES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">DARK MODE</Label>
                    <p className="text-sm text-yellow-600 font-mono">Enable neural dark interface</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">REAL-TIME UPDATES</Label>
                    <p className="text-sm text-yellow-600 font-mono">Live data streaming</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">NEURAL ANIMATIONS</Label>
                    <p className="text-sm text-yellow-600 font-mono">Enhanced visual effects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">AUTO-SAVE</Label>
                    <p className="text-sm text-yellow-600 font-mono">Automatic data preservation</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  SECURITY MATRIX
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">TWO-FACTOR AUTH</Label>
                    <p className="text-sm text-yellow-600 font-mono">Enhanced security protocol</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">SESSION TIMEOUT</Label>
                    <p className="text-sm text-yellow-600 font-mono">Auto-logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label className="text-yellow-400 font-mono">PASSWORD</Label>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    className="bg-black/50 border-yellow-500/30 text-yellow-300"
                  />
                </div>
                <Button className="cyber-button">UPDATE SECURITY</Button>
              </CardContent>
            </Card>

            {/* Performance Settings */}
            <Card className="bg-black/50 border-yellow-500/30 backdrop-blur-xl glow-yellow">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  PERFORMANCE OPTIMIZATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">QUANTUM ACCELERATION</Label>
                    <p className="text-sm text-yellow-600 font-mono">Enhanced processing speed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">NEURAL CACHING</Label>
                    <p className="text-sm text-yellow-600 font-mono">Intelligent data caching</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-yellow-400 font-mono">BACKGROUND SYNC</Label>
                    <p className="text-sm text-yellow-600 font-mono">Continuous data synchronization</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
