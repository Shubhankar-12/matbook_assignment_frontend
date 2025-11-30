"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormSchema } from "@/types/form-schema";
import { submitForm } from "@/services/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormRenderer from "./FormRenderer";
import { Loader2 } from "lucide-react";

interface DynamicFormProps {
  schema: FormSchema;
}

export default function DynamicForm({ schema }: DynamicFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      alert("Form submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      router.push("/submissions");
    },
    onError: () => {
      alert("Failed to submit form. Please try again.");
    },
  });

  const form = useForm({
    defaultValues: {},
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{schema.title}</CardTitle>
        <CardDescription>{schema.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-8"
        >
          <FormRenderer fields={schema.fields} form={form} />
          <div className="flex justify-end">
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
