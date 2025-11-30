export interface Submission {
  id: string;
  created_at: string;
  updated_at?: string;
  values: Record<string, any>;
}

export interface PaginatedSubmissions {
  paginatedResults: Submission[];
  totalCount: { count: number }[];
}
