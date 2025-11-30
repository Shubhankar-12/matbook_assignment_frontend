import { FieldApi } from "@tanstack/react-form";
import { FormField } from "@/types/form-schema";
import TextField from "./fields/TextField";
import NumberField from "./fields/NumberField";
import SelectField from "./fields/SelectField";
import MultiSelectField from "./fields/MultiSelectField";
import DateField from "./fields/DateField";
import TextareaField from "./fields/TextareaField";
import SwitchField from "./fields/SwitchField";

interface FormRendererProps {
  fields: FormField[];
  form: any; // TanStack Form instance
}

export default function FormRenderer({ fields, form }: FormRendererProps) {
  return (
    <div className="space-y-6">
      {fields.map((fieldSchema) => (
        <form.Field
          key={fieldSchema.name}
          name={fieldSchema.name}
          validators={{
            onChange: ({ value }: { value: any }) => {
              const rules = fieldSchema.validations;
              if (!rules) return undefined;

              if (
                fieldSchema.required &&
                !value &&
                value !== 0 &&
                value !== false
              ) {
                return "This field is required";
              }

              if (
                rules.minLength &&
                typeof value === "string" &&
                value.length < rules.minLength
              ) {
                return `Minimum length is ${rules.minLength}`;
              }
              if (
                rules.maxLength &&
                typeof value === "string" &&
                value.length > rules.maxLength
              ) {
                return `Maximum length is ${rules.maxLength}`;
              }
              if (rules.min && typeof value === "number" && value < rules.min) {
                return `Minimum value is ${rules.min}`;
              }
              if (rules.max && typeof value === "number" && value > rules.max) {
                return `Maximum value is ${rules.max}`;
              }
              if (
                rules.minSelected &&
                Array.isArray(value) &&
                value.length < rules.minSelected
              ) {
                return `Select at least ${rules.minSelected} options`;
              }
              if (
                rules.maxSelected &&
                Array.isArray(value) &&
                value.length > rules.maxSelected
              ) {
                return `Select at most ${rules.maxSelected} options`;
              }
              // Date validation is handled in the component or here if needed
              return undefined;
            },
          }}
        >
          {(field: any) => {
            switch (fieldSchema.type) {
              case "text":
                return <TextField field={field} schema={fieldSchema} />;
              case "number":
                return <NumberField field={field} schema={fieldSchema} />;
              case "select":
                return <SelectField field={field} schema={fieldSchema} />;
              case "multi-select":
                return <MultiSelectField field={field} schema={fieldSchema} />;
              case "date":
                return <DateField field={field} schema={fieldSchema} />;
              case "textarea":
                return <TextareaField field={field} schema={fieldSchema} />;
              case "switch":
                return <SwitchField field={field} schema={fieldSchema} />;
              default:
                return null;
            }
          }}
        </form.Field>
      ))}
    </div>
  );
}
