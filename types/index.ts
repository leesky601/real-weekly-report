export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: string;
  end: string;
}

export interface ReportRequest {
  startDate: string;
  endDate: string;
  taskNames: string[];
}

export interface TaskReport {
  taskName: string;
  content: string;
  matched: boolean;
  suggestedKeywords?: string[];
}

export interface GenerateResponse {
  reports: TaskReport[];
  rawText: string;
}
