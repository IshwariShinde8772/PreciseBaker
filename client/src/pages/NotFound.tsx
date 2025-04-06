import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 mb-6 text-sm text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
