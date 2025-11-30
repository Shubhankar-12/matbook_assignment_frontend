import { FieldApi } from "@tanstack/react-form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface TextareaFieldProps {
  field: any;
  schema: FormField;
}

export default function TextareaField({ field, schema }: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Textarea
        id={schema.name}
        placeholder={schema.placeholder}
        value={field.state.value || ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.errors ? (
        <p className="text-sm text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </div>
  );
}
