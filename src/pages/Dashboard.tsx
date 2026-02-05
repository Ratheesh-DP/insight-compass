import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Heart, 
  Search, 
  FileCode, 
  Activity, 
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Domain Lookup",
    description: "Check WHOIS and DNS records",
    icon: Search,
    href: "/web-tools/domain",
    gradient: "gradient-security",
    iconColor: "text-info",
  },
  {
    title: "Website Analysis",
    description: "Analyze security headers & SSL",
    icon: Globe,
    href: "/web-tools/analysis",
    gradient: "gradient-security",
    iconColor: "text-info",
  },
  {
    title: "Tech Stack Detection",
    description: "Identify technologies used",
    icon: FileCode,
    href: "/web-tools/tech-stack",
    gradient: "gradient-security",
    iconColor: "text-info",
  },
  {
    title: "Lifestyle Assessment",
    description: "Evaluate your daily habits",
    icon: Activity,
    href: "/health/assessment",
    gradient: "gradient-health",
    iconColor: "text-success",
  },
  {
    title: "AI Health Tips",
    description: "Get personalized recommendations",
    icon: Sparkles,
    href: "/health/recommendations",
    gradient: "gradient-health",
    iconColor: "text-success",
  },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to VitaGuard</h1>
          <p className="text-muted-foreground text-lg">
            Your all-in-one toolkit for digital wellness and web security analysis.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Web Analyses
              </CardTitle>
              <Globe className="w-4 h-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3 inline mr-1" />
                No recent analyses
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Health Assessments
              </CardTitle>
              <Heart className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground mt-1">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                Start your first assessment
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Data Storage
              </CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Local</div>
              <p className="text-xs text-muted-foreground mt-1">
                All data stored in browser
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.href}>
                <Card className="shadow-card border-0 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center shadow-card flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {action.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {action.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <Card className="shadow-card border-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              New to VitaGuard? Here's how to make the most of your toolkit:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full gradient-security flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium">Analyze a Website</p>
                  <p className="text-sm text-muted-foreground">
                    Enter any domain to get security insights, tech stack info, and DNS records.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full gradient-health flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium">Complete Health Assessment</p>
                  <p className="text-sm text-muted-foreground">
                    Answer questions about your lifestyle to receive personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}