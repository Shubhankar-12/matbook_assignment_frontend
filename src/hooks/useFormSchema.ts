import { useQuery } from "@tanstack/react-query";
import { fetchFormSchema } from "@/services/api";
import { FormSchema } from "@/types/form-schema";

export const useFormSchema = () => {
  return useQuery<FormSchema>({
    queryKey: ["form-schema"],
    queryFn: fetchFormSchema,
  });
};
