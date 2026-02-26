import { google } from "googleapis";
import type { CalendarEvent } from "@/types";

export async function fetchCalendarEvents(
  accessToken: string,
  startDate: string,
  endDate: string
): Promise<CalendarEvent[]> {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const events: CalendarEvent[] = [];
  let pageToken: string | undefined;

  do {
    const response = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date(startDate).toISOString(),
      timeMax: new Date(endDate + "T23:59:59").toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      maxResults: 250,
      pageToken,
    });

    for (const item of response.data.items ?? []) {
      if (!item.id || !item.summary) continue;
      events.push({
        id: item.id,
        summary: item.summary,
        description: item.description ?? undefined,
        start: item.start?.dateTime ?? item.start?.date ?? "",
        end: item.end?.dateTime ?? item.end?.date ?? "",
      });
    }

    pageToken = response.data.nextPageToken ?? undefined;
  } while (pageToken);

  return events;
}
