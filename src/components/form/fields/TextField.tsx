import { FieldApi } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface TextFieldProps {
  field: any;
  schema: FormField;
}

export default function TextField({ field, schema }: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
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
