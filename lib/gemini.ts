import { GoogleGenAI } from "@google/genai";
import type { CalendarEvent, TaskReport } from "@/types";
import { buildReportPrompt } from "./prompts";

function getAI() {
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
}

export async function generateReport(
  events: CalendarEvent[],
  taskNames: string[]
): Promise<{ reports: TaskReport[]; rawText: string }> {
  const prompt = buildReportPrompt(events, taskNames);

  try {
    const response = await getAI().models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const rawText = response.text ?? "";
    const reports = parseReports(rawText, taskNames);

    return { reports, rawText };
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string };
    if (err.status === 429 || err.message?.includes("RESOURCE_EXHAUSTED")) {
      throw new QuotaExhaustedError();
    }
    throw error;
  }
}

function parseReports(rawText: string, taskNames: string[]): TaskReport[] {
  return taskNames.map((taskName) => {
    const pattern = new RegExp(
      `###\\s*\\[?${escapeRegex(taskName)}\\]?([\\s\\S]*?)(?=###\\s*\\[?|$)`
    );
    const match = rawText.match(pattern);

    if (!match) {
      return { taskName, content: "(보고서 생성 실패)", matched: false };
    }

    const section = match[1].trim();
    const hasKeywords = section.includes("suggested_keywords");
    const matched = !section.includes("관련 일정 없음");

    let suggestedKeywords: string[] | undefined;
    if (hasKeywords) {
      const kwMatch = section.match(
        /\*\*suggested_keywords\*\*:\s*\[?([^\]\n]+)\]?/
      );
      if (kwMatch) {
        suggestedKeywords = kwMatch[1]
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean);
      }
    }

    const content = section
      .replace(/\*\*suggested_keywords\*\*:\s*\[?[^\]\n]+\]?/, "")
      .trim();

    return { taskName, content, matched, suggestedKeywords };
  });
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export class QuotaExhaustedError extends Error {
  constructor() {
    super("API quota exhausted");
    this.name = "QuotaExhaustedError";
  }
}
