import { FieldApi } from "@tanstack/react-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";

interface DateFieldProps {
  field: any;
  schema: FormField;
}

export default function DateField({ field, schema }: DateFieldProps) {
  return (
    <div className="space-y-2 flex flex-col">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal",
              !field.state.value && "text-muted-foreground"
            )}
          >
            {field.state.value ? (
              format(new Date(field.state.value), "PPP")
            ) : (
              <span>{schema.placeholder || "Pick a date"}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={
              field.state.value ? new Date(field.state.value) : undefined
            }
            onSelect={(date) =>
              field.handleChange(date ? format(date, "yyyy-MM-dd") : "")
            }
            disabled={(date) => {
              if (schema.validations?.minDate) {
                return date < new Date(schema.validations.minDate);
              }
              if (schema.validations?.maxDate) {
                return date > new Date(schema.validations.maxDate);
              }
              return false;
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {field.state.meta.errors ? (
        <p className="text-sm text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </div>
  );
}
