import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Heart, Moon, Utensils, Brain } from "lucide-react";

const categories = [
  { icon: Moon, title: "Sleep Quality", description: "Evaluate your sleep patterns and rest quality" },
  { icon: Activity, title: "Physical Activity", description: "Assess your exercise and movement habits" },
  { icon: Utensils, title: "Nutrition", description: "Review your dietary choices and eating patterns" },
  { icon: Brain, title: "Mental Wellness", description: "Check your stress levels and mental health" },
];

export default function LifestyleAssessment() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Lifestyle Assessment</h1>
          <p className="text-muted-foreground">
            Answer questions about your daily habits to receive personalized health insights.
          </p>
        </div>

        <Card className="shadow-card border-0 gradient-health">
          <CardContent className="py-8">
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Start Your Assessment</h2>
                <p className="text-white/80">Takes approximately 5-10 minutes to complete</p>
              </div>
              <Button variant="secondary" size="lg" className="shadow-lg">
                Begin
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Assessment Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Card key={category.title} className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}