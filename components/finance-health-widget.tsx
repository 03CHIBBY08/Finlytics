import { Trophy, Award, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const badges = [
  {
    name: "10K Club",
    description: "Revenue milestone",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    unlocked: true,
  },
  {
    name: "Churn Buster",
    description: "Churn < 5%",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    unlocked: true,
  },
  {
    name: "Growth Guru",
    description: "MRR +20%",
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    unlocked: false,
  },
]

export function FinanceHealthWidget() {
  const healthScore = 78

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-600"
    if (score >= 50) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 75) return "from-green-500 to-emerald-500"
    if (score >= 50) return "from-orange-500 to-yellow-500"
    return "from-red-500 to-pink-500"
  }

  return (
    <div className="space-y-6">
      {/* Health Score */}
      <Card className="shadow-lg border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-lg font-semibold">Financial Health Score</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {/* Circular Progress */}
          <div className="relative w-32 h-32 mx-auto">
            <div className={`absolute inset-0 bg-gradient-to-r ${getScoreBgColor(healthScore)} rounded-full p-1`}>
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getScoreColor(healthScore)}`}>{healthScore}</div>
                  <div className="text-xs text-slate-500">/ 100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Progress value={healthScore} className="h-2" />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {healthScore >= 75 ? "Excellent" : healthScore >= 50 ? "Good" : "Needs Attention"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Badges */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                badge.unlocked
                  ? "bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800"
                  : "bg-slate-100 dark:bg-slate-800 opacity-60"
              }`}
            >
              <div className={`p-2 rounded-lg ${badge.unlocked ? badge.bgColor : "bg-slate-200 dark:bg-slate-700"}`}>
                <badge.icon className={`w-4 h-4 ${badge.unlocked ? badge.color : "text-slate-400"}`} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-medium ${badge.unlocked ? "text-slate-800 dark:text-slate-100" : "text-slate-500"}`}
                  >
                    {badge.name}
                  </span>
                  {badge.unlocked && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                      Unlocked
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{badge.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
