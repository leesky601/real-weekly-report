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
import { useLanguage } from "@/lib/i18n";
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
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">{t.results}</h2>
        <Button variant="outline" size="sm" onClick={handleCopy}>
          {copied ? (
            <>
              <Check />
              {t.copied}
            </>
          ) : (
            <>
              <CopySimple />
              {t.copyAll}
            </>
          )}
        </Button>
      </div>

      {reports.every((r) => !r.matched) && (
        <p className="text-muted-foreground text-sm text-center py-2">
          {t.noMatchMessage}
        </p>
      )}

      {reports.map((report) => (
        <Card key={report.taskName} size="sm">
          <CardHeader>
            <CardTitle>{report.taskName}</CardTitle>
            {!report.matched && (
              <CardAction>
                <span className="text-muted-foreground text-xs">{t.noMatch}</span>
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
