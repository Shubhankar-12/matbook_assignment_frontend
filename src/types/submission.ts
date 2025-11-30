export interface Submission {
  id: string;
  createdAt: string; // ISO date string
  values: Record<string, any>;
}

export interface PaginatedSubmissions {
  data: Submission[];
  total: number;
  page: number;
  limit: number;
}
