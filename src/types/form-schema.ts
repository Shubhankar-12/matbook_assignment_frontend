export type FieldType =
  | "text"
  | "number"
  | "select"
  | "multi-select"
  | "date"
  | "textarea"
  | "switch";

export interface ValidationRules {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  minDate?: string; // ISO date string
  maxDate?: string; // ISO date string
  pattern?: string;
  minSelected?: number;
  maxSelected?: number;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select and multi-select
  validations?: ValidationRules;
}

export interface FormSchema {
  id?: string;
  title: string;
  description: string;
  fields: FormField[];
}
