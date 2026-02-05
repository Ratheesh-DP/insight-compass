import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export default function Recommendations() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">AI Recommendations</h1>
          <p className="text-muted-foreground">
            Personalized health tips powered by intelligent analysis of your lifestyle data.
          </p>
        </div>

        <Card className="shadow-card border-0 bg-muted/30">
          <CardContent className="py-12 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 flex items-center justify-center">
              <ClipboardList className="w-10 h-10 text-success" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="text-xl font-semibold">Complete Your Assessment First</h2>
              <p className="text-muted-foreground">
                To receive personalized AI recommendations, please complete a lifestyle assessment. 
                This helps us understand your habits and provide tailored advice.
              </p>
            </div>
            <Link to="/health/assessment">
              <Button className="gradient-health border-0 shadow-card">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-success" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full gradient-health flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">Complete Assessment</p>
                <p className="text-sm text-muted-foreground">
                  Answer questions about your sleep, activity, nutrition, and stress levels.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full gradient-health flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">AI Analysis</p>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your responses to identify areas for improvement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full gradient-health flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">Get Personalized Tips</p>
                <p className="text-sm text-muted-foreground">
                  Receive actionable recommendations tailored to your lifestyle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}