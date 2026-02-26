import { NextResponse } from "next/server";
import { fetchCalendarEvents } from "@/lib/google-calendar";
import { generateReport, QuotaExhaustedError } from "@/lib/gemini";
import type { ReportRequest } from "@/types";

function getAccessToken(request: Request): string | null {
  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Bearer ")) return null;
  return header.slice(7);
}

export async function POST(request: Request) {
  const accessToken = getAccessToken(request);
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as ReportRequest;
  const { startDate, endDate, taskNames } = body;

  if (!startDate || !endDate || !taskNames?.length) {
    return NextResponse.json(
      { error: "startDate, endDate, and at least one taskName are required" },
      { status: 400 }
    );
  }

  try {
    const events = await fetchCalendarEvents(accessToken, startDate, endDate);
    const result = await generateReport(events, taskNames);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof QuotaExhaustedError) {
      return NextResponse.json(
        { error: "quota_exhausted" },
        { status: 429 }
      );
    }
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}
