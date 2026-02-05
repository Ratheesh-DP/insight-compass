import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Globe, 
  Heart, 
  ArrowRight, 
  Search, 
  FileCode, 
  Activity, 
  Sparkles,
  CheckCircle2,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const webFeatures = [
  {
    icon: Search,
    title: "Domain & DNS Lookup",
    description: "WHOIS records, DNS configuration, and domain reputation analysis",
  },
  {
    icon: Globe,
    title: "Website Analysis",
    description: "Security headers, SSL certificates, and performance metrics",
  },
  {
    icon: FileCode,
    title: "Technology Detection",
    description: "Identify CMS, frameworks, and tech stack of any website",
  },
];

const healthFeatures = [
  {
    icon: Activity,
    title: "Lifestyle Assessment",
    description: "Analyze sleep, stress, activity levels, and daily habits",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Personalized health tips powered by intelligent analysis",
  },
];

const benefits = [
  "All data stored locally in your browser",
  "No account required to get started",
  "Free to use with no limits",
  "Privacy-first approach",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">VitaGuard</span>
          </Link>
          <Link to="/dashboard">
            <Button className="gradient-primary border-0 shadow-card hover:opacity-90 transition-opacity">
              Open Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              Digital Wellness & Web Security
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Your Complete{" "}
              <span className="text-gradient-primary">Health & Security</span>{" "}
              Toolkit
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Analyze websites for security insights and assess your lifestyle for 
              personalized health recommendations—all in one privacy-focused app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/web-tools/domain">
                <Button size="lg" className="gradient-security border-0 shadow-card w-full sm:w-auto">
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Web Tools
                </Button>
              </Link>
              <Link to="/health/assessment">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Health Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Web Tools */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-security flex items-center justify-center shadow-card">
                  <Globe className="w-6 h-6 text-info-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Web Security Tools</h2>
                  <p className="text-muted-foreground">Analyze any website</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {webFeatures.map((feature) => (
                  <Card key={feature.title} className="shadow-card border-0 bg-card hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-info" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <CardDescription className="mt-1">{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Health Tools */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-health flex items-center justify-center shadow-card">
                  <Heart className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Health Assessment</h2>
                  <p className="text-muted-foreground">Personalized insights</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {healthFeatures.map((feature) => (
                  <Card key={feature.title} className="shadow-card border-0 bg-card hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-success" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <CardDescription className="mt-1">{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Benefits */}
              <Card className="shadow-card border-0 bg-gradient-to-br from-primary/5 to-success/5">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-card border-0 gradient-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
                Start analyzing websites or check your health—no signup required. 
                Your data stays in your browser.
              </p>
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Launch VitaGuard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="font-medium">VitaGuard</span>
              <span className="text-sm">— Digital Wellness & Security</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Privacy-first. No tracking. Data stored locally.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}