import { useQuery } from "@tanstack/react-query";
import { fetchSubmissionById } from "@/services/api";
import { Submission } from "@/types/submission";

export function useSubmission(id: string | null) {
  return useQuery<Submission>({
    queryKey: ["submission", id],
    queryFn: () => fetchSubmissionById(id!),
    enabled: !!id,
  });
}
