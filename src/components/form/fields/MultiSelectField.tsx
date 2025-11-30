import { FieldApi } from "@tanstack/react-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { FormField } from "@/types/form-schema";
import { Checkbox } from "@/components/ui/checkbox";

interface MultiSelectFieldProps {
  field: any;
  schema: FormField;
}

export default function MultiSelectField({
  field,
  schema,
}: MultiSelectFieldProps) {
  const value = (field.state.value as string[]) || [];

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      field.handleChange(value.filter((v) => v !== option));
    } else {
      field.handleChange([...value, option]);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={schema.name}>
        {schema.label}
        {schema.required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !value.length && "text-muted-foreground"
            )}
          >
            {value.length > 0
              ? `${value.length} selected`
              : schema.placeholder || "Select options"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <div className="p-2 gap-2 flex flex-col">
            {schema.options?.map((option) => (
              <div
                key={option}
                className="flex items-center space-x-2 p-2 hover:bg-accent rounded-sm cursor-pointer"
                onClick={() => toggleOption(option)}
              >
                <Checkbox
                  id={`${schema.name}-${option}`}
                  checked={value.includes(option)}
                  onCheckedChange={() => toggleOption(option)}
                />
                <label
                  htmlFor={`${schema.name}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
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
