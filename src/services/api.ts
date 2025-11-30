import { FormSchema } from "@/types/form-schema";
import { Submission, PaginatedSubmissions } from "@/types/submission";

const MOCK_DELAY = 1000;

export const FORM_SCHEMA: FormSchema = {
  title: "Employee Onboarding",
  description: "Fill employee details",
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
      validations: { minLength: 3, maxLength: 50 },
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      required: true,
      validations: { min: 18, max: 60 },
    },
    {
      name: "department",
      label: "Department",
      type: "select",
      options: ["HR", "Engineering", "Sales"],
      required: true,
    },
    {
      name: "skills",
      label: "Skills",
      type: "multi-select",
      options: ["React", "Node", "Design"],
      validations: { minSelected: 1, maxSelected: 3 },
    },
    {
      name: "joiningDate",
      label: "Joining Date",
      type: "date",
      validations: { minDate: "2024-01-01" },
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      validations: { maxLength: 200 },
    },
    {
      name: "remote",
      label: "Remote",
      type: "switch",
    },
  ],
};

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: "sub_001",
    createdAt: "2025-01-20T10:14:22.000Z",
    values: {
      fullName: "John Doe",
      age: 28,
      department: "Engineering",
      skills: ["React", "Node"],
      joiningDate: "2025-01-15",
      remote: true,
    },
  },
  {
    id: "sub_002",
    createdAt: "2025-01-19T16:04:12.000Z",
    values: {
      fullName: "Sara Smith",
      age: 32,
      department: "HR",
      skills: ["Design"],
      joiningDate: "2025-01-10",
      remote: false,
    },
  },
];

// Simulate a database
let submissions = [...MOCK_SUBMISSIONS];

export const fetchFormSchema = async (): Promise<FormSchema> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FORM_SCHEMA);
    }, MOCK_DELAY);
  });
};

export const submitForm = async (
  values: Record<string, any>
): Promise<Submission> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newSubmission: Submission = {
        id: `sub_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        values,
      };
      submissions = [newSubmission, ...submissions];
      resolve(newSubmission);
    }, MOCK_DELAY);
  });
};

export const fetchSubmissions = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedSubmissions> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = submissions.slice(start, end);
      resolve({
        data,
        total: submissions.length,
        page,
        limit,
      });
    }, MOCK_DELAY);
  });
};
