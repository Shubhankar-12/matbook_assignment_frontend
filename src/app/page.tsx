"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, List, PlusCircle, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Employee Onboarding System.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Submission
            </CardTitle>
            <PlusCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Onboard Employee</div>
            <p className="text-xs text-muted-foreground mt-1">
              Start a new onboarding process
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href="/form">
                <FileText className="mr-2 h-4 w-4" />
                Go to Form
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submissions</CardTitle>
            <List className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">View Records</div>
            <p className="text-xs text-muted-foreground mt-1">
              Manage employee submissions
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link href="/submissions">
                <Users className="mr-2 h-4 w-4" />
                View All
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
