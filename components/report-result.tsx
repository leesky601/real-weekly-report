"use client";

import { useState } from "react";
import { CopySimple, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { KeywordSuggestions } from "@/components/keyword-suggestions";
import type { TaskReport } from "@/types";

interface ReportResultProps {
  reports: TaskReport[];
  rawText: string;
  onAddTask: (task: string) => void;
}

export function ReportResult({
  reports,
  rawText,
  onAddTask,
}: ReportResultProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">생성 결과</h2>
        <Button variant="outline" size="sm" onClick={handleCopy}>
          {copied ? (
            <>
              <Check />
              복사 완료
            </>
          ) : (
            <>
              <CopySimple />
              전체 복사
            </>
          )}
        </Button>
      </div>

      {reports.every((r) => !r.matched) && (
        <p className="text-muted-foreground text-sm text-center py-2">
          선택한 기간에 매칭되는 일정이 없습니다. 과제명이나 기간을 조정해보세요.
        </p>
      )}

      {reports.map((report) => (
        <Card key={report.taskName} size="sm">
          <CardHeader>
            <CardTitle>{report.taskName}</CardTitle>
            {!report.matched && (
              <CardAction>
                <span className="text-muted-foreground text-xs">매칭 실패</span>
              </CardAction>
            )}
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="text-sm whitespace-pre-wrap">{report.content}</div>
            {report.suggestedKeywords && (
              <KeywordSuggestions
                keywords={report.suggestedKeywords}
                onKeywordClick={onAddTask}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
