import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe } from "lucide-react";

export default function DomainLookup() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Domain Lookup</h1>
          <p className="text-muted-foreground">
            Get WHOIS records, DNS configuration, and domain reputation information.
          </p>
        </div>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-info" />
              Enter Domain
            </CardTitle>
            <CardDescription>
              Enter a domain name to look up its registration and DNS records.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input 
                placeholder="example.com" 
                className="flex-1"
              />
              <Button className="gradient-security border-0 shadow-card">
                <Globe className="w-4 h-4 mr-2" />
                Lookup
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-muted/30">
          <CardContent className="py-12 text-center">
            <Search className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">
              Enter a domain above to see results
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}