import { FieldApi } from "@tanstack/react-form";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface SwitchFieldProps {
  field: any;
  schema: FormField;
}

export default function SwitchField({ field, schema }: SwitchFieldProps) {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label htmlFor={schema.name}>
          {schema.label}
          {schema.required && <span className="text-destructive ml-1">*</span>}
        </Label>
      </div>
      <Switch
        id={schema.name}
        checked={field.state.value || false}
        onCheckedChange={(checked) => field.handleChange(checked)}
      />
      {field.state.meta.errors ? (
        <p className="text-sm text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </div>
  );
}
