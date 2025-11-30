import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Submission } from "@/types/submission";
import { format } from "date-fns";
import { useSubmission } from "@/hooks/useSubmission";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";

interface ViewSubmissionModalProps {
  submission: Submission | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ViewSubmissionModal({
  submission,
  open,
  onOpenChange,
}: ViewSubmissionModalProps) {
  const {
    data: fullSubmission,
    isLoading,
    isError,
    refetch,
  } = useSubmission(open && submission ? submission.id : null);

  if (!submission) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submission Details</DialogTitle>
          <DialogDescription>
            ID: {submission.id} • Submitted on{" "}
            {format(new Date(submission.created_at), "PPpp")}
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader />
          </div>
        ) : isError ? (
          <ErrorState
            title="Failed to load details"
            message="Could not fetch the full submission details."
            onRetry={refetch}
          />
        ) : fullSubmission && fullSubmission.values ? (
          <div className="grid gap-4 py-4">
            {Object.entries(fullSubmission.values).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-3 gap-4 border-b pb-4 last:border-0"
              >
                <div className="font-medium capitalize text-muted-foreground">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div className="col-span-2 font-medium">
                  {Array.isArray(value) ? (
                    <div className="flex flex-wrap gap-1">
                      {value.map((v) => (
                        <span
                          key={v}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  ) : typeof value === "boolean" ? (
                    value ? (
                      "Yes"
                    ) : (
                      "No"
                    )
                  ) : (
                    String(value)
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center text-muted-foreground">
            No details available.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
