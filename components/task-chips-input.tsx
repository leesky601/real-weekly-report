"use client";

import { useState, type KeyboardEvent } from "react";
import { X } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

interface TaskChipsInputProps {
  tasks: string[];
  onTasksChange: (tasks: string[]) => void;
}

export function TaskChipsInput({ tasks, onTasksChange }: TaskChipsInputProps) {
  const { t } = useLanguage();
  const [input, setInput] = useState("");

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input.trim();
      if (value && !tasks.includes(value)) {
        onTasksChange([...tasks, value]);
        setInput("");
      }
    }
    if (e.key === "Backspace" && input === "" && tasks.length > 0) {
      onTasksChange(tasks.slice(0, -1));
    }
  }

  function removeTask(index: number) {
    onTasksChange(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent px-2.5 py-1.5 shadow-xs focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
      {tasks.map((task, i) => (
        <Badge key={task} variant="secondary" className="gap-1 pr-1">
          {task}
          <button
            type="button"
            onClick={() => removeTask(i)}
            className="hover:bg-muted-foreground/20 rounded-full p-0.5"
          >
            <X className="size-3" />
          </button>
        </Badge>
      ))}
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tasks.length === 0 ? t.taskPlaceholder : ""}
        className="h-auto min-w-[120px] flex-1 border-0 p-0 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
