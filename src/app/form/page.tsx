"use client";

import DynamicForm from "@/components/form/DynamicForm";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";
import { useFormSchema } from "@/hooks/useFormSchema";

export default function FormPage() {
  const { data: schema, isLoading, isError, refetch } = useFormSchema();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !schema) {
    return <ErrorState onRetry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">New Submission</h1>
        <p className="text-muted-foreground">
          Please fill out the form below to submit your details.
        </p>
      </div>
      <DynamicForm schema={schema} />
    </div>
  );
}
