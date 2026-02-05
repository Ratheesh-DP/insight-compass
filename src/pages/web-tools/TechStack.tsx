import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileCode, Scan } from "lucide-react";

export default function TechStack() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Technology Detection</h1>
          <p className="text-muted-foreground">
            Identify CMS, frameworks, libraries, and the complete tech stack of any website.
          </p>
        </div>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-info" />
              Detect Technologies
            </CardTitle>
            <CardDescription>
              Enter a website URL to discover what technologies power it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input 
                placeholder="https://example.com" 
                className="flex-1"
              />
              <Button className="gradient-security border-0 shadow-card">
                <Scan className="w-4 h-4 mr-2" />
                Detect
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-muted/30">
          <CardContent className="py-12 text-center">
            <FileCode className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">
              Enter a URL above to detect technologies
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}