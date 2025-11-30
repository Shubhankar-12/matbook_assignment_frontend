import { ColumnDef } from "@tanstack/react-table";
import { Submission } from "@/types/submission";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export const getColumns = (
  onView: (submission: Submission) => void
): ColumnDef<Submission>[] => [
  {
    accessorKey: "id",
    header: "Submission ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          {format(new Date(row.getValue("createdAt")), "PPpp")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onView(row.original)}
          className="h-8 w-8 p-0"
        >
          <span className="sr-only">View details</span>
          <Eye className="h-4 w-4" />
        </Button>
      );
    },
  },
];
