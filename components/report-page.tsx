"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReportForm } from "@/components/report-form";
import { ReportResult } from "@/components/report-result";
import { QuotaWarningDialog } from "@/components/quota-warning-dialog";
import type { TaskReport, GenerateResponse } from "@/types";

function getDefaultDates() {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 6);
  return {
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10),
  };
}

export function ReportPage() {
  const router = useRouter();
  const { accessToken, isReady, logout } = useAuth();

  const defaults = getDefaultDates();
  const [startDate, setStartDate] = useState(defaults.startDate);
  const [endDate, setEndDate] = useState(defaults.endDate);
  const [tasks, setTasks] = useState<string[]>([]);
  const [reports, setReports] = useState<TaskReport[]>([]);
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quotaOpen, setQuotaOpen] = useState(false);

  useEffect(() => {
    if (isReady && !accessToken) {
      router.replace("/login");
    }
  }, [isReady, accessToken, router]);

  async function handleSubmit() {
    if (!accessToken) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ startDate, endDate, taskNames: tasks }),
      });

      if (res.status === 429) {
        setQuotaOpen(true);
        return;
      }

      if (res.status === 401) {
        logout();
        router.replace("/login");
        return;
      }

      if (!res.ok) {
        throw new Error("보고서 생성에 실패했습니다.");
      }

      const data: GenerateResponse = await res.json();
      setReports(data.reports);
      setRawText(data.rawText);
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류");
    } finally {
      setLoading(false);
    }
  }

  function handleAddTask(task: string) {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  }

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  if (!isReady || !accessToken) return null;

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">real-weekly-report</h1>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <SignOut />
          로그아웃
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>보고서 설정</CardTitle>
        </CardHeader>
        <CardContent>
          <ReportForm
            startDate={startDate}
            endDate={endDate}
            tasks={tasks}
            loading={loading}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onTasksChange={setTasks}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>

      {error && (
        <p className="text-destructive text-sm text-center">{error}</p>
      )}

      {reports.length > 0 && (
        <>
          <Separator />
          <ReportResult
            reports={reports}
            rawText={rawText}
            onAddTask={handleAddTask}
          />
        </>
      )}

      <QuotaWarningDialog
        open={quotaOpen}
        onClose={() => setQuotaOpen(false)}
      />
    </div>
  );
}
