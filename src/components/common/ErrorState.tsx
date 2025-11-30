import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "An error occurred while fetching data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center rounded-md border border-destructive/50 bg-destructive/10 p-8 text-center text-destructive animate-in fade-in-50">
      <AlertCircle className="h-10 w-10 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-6 mt-2 text-sm opacity-90 max-w-sm">{message}</p>
      {onRetry && (
        <Button
          variant="outline"
          onClick={onRetry}
          className="border-destructive/50 hover:bg-destructive/20"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
