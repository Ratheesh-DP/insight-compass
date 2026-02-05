import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Shield } from "lucide-react";

export default function WebsiteAnalysis() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Website Analysis</h1>
          <p className="text-muted-foreground">
            Analyze security headers, SSL certificates, and performance metrics.
          </p>
        </div>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-info" />
              Enter Website URL
            </CardTitle>
            <CardDescription>
              Enter a complete URL to analyze its security configuration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input 
                placeholder="https://example.com" 
                className="flex-1"
              />
              <Button className="gradient-security border-0 shadow-card">
                <Globe className="w-4 h-4 mr-2" />
                Analyze
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-muted/30">
          <CardContent className="py-12 text-center">
            <Globe className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">
              Enter a URL above to see security analysis
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}