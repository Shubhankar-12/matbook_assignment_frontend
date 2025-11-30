"use client";

import { useState } from "react";
import { useSubmissions } from "@/hooks/useSubmissions";
import SubmissionTable from "@/components/table/SubmissionTable";
import { getColumns } from "@/components/table/SubmissionColumns";
import ViewSubmissionModal from "@/components/table/ViewSubmissionModal";
import { Submission } from "@/types/submission";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";
import { PaginationState, SortingState } from "@tanstack/react-table";

export default function SubmissionsPage() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError, refetch } = useSubmissions(
    pagination.pageIndex + 1,
    pagination.pageSize
  );

  const handleView = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const columns = getColumns(handleView);

  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Submissions</h1>
        <p className="text-muted-foreground">
          View and manage all form submissions.
        </p>
      </div>

      <SubmissionTable
        columns={columns}
        data={data?.paginatedResults || []}
        pageCount={
          data && data.totalCount && data.totalCount.length > 0
            ? Math.ceil(data.totalCount[0].count / pagination.pageSize)
            : 0
        }
        pagination={pagination}
        onPaginationChange={setPagination}
        sorting={sorting}
        onSortingChange={setSorting}
        isLoading={isLoading}
      />

      <ViewSubmissionModal
        submission={selectedSubmission}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
