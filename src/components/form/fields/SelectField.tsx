import { FieldApi } from "@tanstack/react-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface SelectFieldProps {
  field: any;
  schema: FormField;
}

export default function SelectField({ field, schema }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Select
        value={field.state.value || ""}
        onValueChange={(value) => field.handleChange(value)}
      >
        <SelectTrigger id={schema.name}>
          <SelectValue placeholder={schema.placeholder || "Select an option"} />
        </SelectTrigger>
        <SelectContent>
          {schema.options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {field.state.meta.errors ? (
        <p className="text-sm text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </div>
  );
}
