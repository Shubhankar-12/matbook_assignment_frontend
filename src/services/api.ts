import { FormSchema } from "@/types/form-schema";
import { Submission, PaginatedSubmissions } from "@/types/submission";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api";

export const fetchFormSchema = async (): Promise<FormSchema> => {
  const response = await fetch(`${API_BASE_URL}/form-schema`);
  if (!response.ok) {
    throw new Error("Failed to fetch form schema");
  }
  return response.json();
};

export const submitForm = async (
  values: Record<string, any>
): Promise<Submission> => {
  const response = await fetch(`${API_BASE_URL}/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit form");
  }
  return response.json();
};

export const fetchSubmissions = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedSubmissions> => {
  const response = await fetch(
    `${API_BASE_URL}/submissions?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch submissions");
  }
  return response.json();
};

export const fetchSubmissionById = async (id: string): Promise<Submission> => {
  const response = await fetch(`${API_BASE_URL}/submissions/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch submission details");
  }
  return response.json();
};
