"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskChipsInput } from "@/components/task-chips-input";
import { SpinnerGap } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";

interface ReportFormProps {
  startDate: string;
  endDate: string;
  tasks: string[];
  loading: boolean;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onTasksChange: (tasks: string[]) => void;
  onSubmit: () => void;
}

export function ReportForm({
  startDate,
  endDate,
  tasks,
  loading,
  onStartDateChange,
  onEndDateChange,
  onTasksChange,
  onSubmit,
}: ReportFormProps) {
  const { t } = useLanguage();
  const isValid = startDate && endDate && tasks.length > 0 && endDate >= startDate;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid) onSubmit();
      }}
      className="grid gap-4"
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="startDate">{t.startDate}</Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="endDate">{t.endDate}</Label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
      </div>

      {endDate && startDate && endDate < startDate && (
        <p className="text-destructive text-sm">{t.endDateError}</p>
      )}

      <div className="grid gap-1.5">
        <Label>{t.taskLabel}</Label>
        <TaskChipsInput tasks={tasks} onTasksChange={onTasksChange} />
      </div>

      <Button type="submit" disabled={!isValid || loading} className="w-full">
        {loading ? (
          <>
            <SpinnerGap className="animate-spin" />
            {t.generating}
          </>
        ) : (
          t.generateReport
        )}
      </Button>
    </form>
  );
}
