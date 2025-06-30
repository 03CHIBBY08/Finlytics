"use client"

import { Lightbulb, TrendingUp, Target, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const insights = [
  {
    icon: TrendingUp,
    title: "Revenue Opportunity Detected",
    message:
      "Revenue dropped 14% in April due to churn spike — review onboarding emails and consider implementing a retention campaign.",
    action: "View Retention Strategy",
    gradient: "from-blue-500 to-cyan-500",
    link: "/strategies/retention",
  },
  {
    icon: Target,
    title: "Marketing Performance",
    message:
      "LinkedIn Ads contributed 45% more signups this month. Consider increasing budget allocation to this channel.",
    action: "Optimize Ad Spend",
    gradient: "from-green-500 to-emerald-500",
    link: "/marketing/optimization",
  },
  {
    icon: Lightbulb,
    title: "Customer Behavior Insight",
    message:
      "Enterprise customers show 3x higher engagement with video tutorials. Expand video content for better onboarding.",
    action: "Content Strategy",
    gradient: "from-purple-500 to-pink-500",
    link: "/content/strategy",
  },
]

export function AIInsights() {
  const { toast } = useToast()

  const handleInsightAction = (insight: any) => {
    toast({
      title: "Action Initiated",
      description: `${insight.action} workflow has been started.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">AI-Powered Insights</h2>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
            />
            <CardContent className="relative p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gradient-to-r ${insight.gradient} rounded-lg flex-shrink-0`}>
                  <insight.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">{insight.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{insight.message}</p>

                  <Link href={insight.link}>
                    <Button
                      variant="ghost"
                      className="gap-2 p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      onClick={() => handleInsightAction(insight)}
                    >
                      {insight.action}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
