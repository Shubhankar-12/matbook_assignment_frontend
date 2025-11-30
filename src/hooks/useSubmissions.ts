import { useQuery } from "@tanstack/react-query";
import { fetchSubmissions } from "@/services/api";
import { PaginatedSubmissions } from "@/types/submission";

export const useSubmissions = (page: number, limit: number) => {
  return useQuery<PaginatedSubmissions>({
    queryKey: ["submissions", page, limit],
    queryFn: () => fetchSubmissions(page, limit),
  });
};
