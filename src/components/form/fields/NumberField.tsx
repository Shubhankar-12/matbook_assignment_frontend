import { FieldApi } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface NumberFieldProps {
  field: any;
  schema: FormField;
}

export default function NumberField({ field, schema }: NumberFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        id={schema.name}
        type="number"
        placeholder={schema.placeholder}
        value={field.state.value || ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(Number(e.target.value))}
      />
      {field.state.meta.errors ? (
        <p className="text-sm text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </div>
  );
}
