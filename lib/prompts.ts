import type { CalendarEvent } from "@/types";

export function buildReportPrompt(
  events: CalendarEvent[],
  taskNames: string[]
): string {
  const eventList = events
    .map(
      (e) =>
        `- [${e.start}] ${e.summary}${e.description ? ` (${e.description})` : ""}`
    )
    .join("\n");

  const taskList = taskNames.map((t) => `- ${t}`).join("\n");

  return `당신은 주간보고 작성 전문가입니다. 아래 Google Calendar 일정 목록을 분석하여 각 과제별 주간보고를 작성해주세요.

## 과제 목록
${taskList}

## 일정 목록
${eventList || "(일정 없음)"}

## 작성 규칙
1. 각 과제명과 관련된 일정을 매칭하세요. 일정의 제목, 설명에서 과제와 관련된 키워드를 찾아 분류합니다.
2. 과제별로 아래 형식으로 작성하세요:

### [과제명]
**Progress (금주 실적)**
- 구체적인 활동 내용을 bullet point로 작성

**Next Steps (차주 계획)**
- 후속 작업이나 예상되는 활동을 bullet point로 작성

3. 매칭되는 일정이 없는 과제는 다음 형식으로 작성하세요:
### [과제명]
(관련 일정 없음)
**suggested_keywords**: [일정 목록에서 이 과제와 유사할 수 있는 키워드 3개를 쉼표로 나열]

4. 한국어로 작성하세요.
5. 보고서 외의 다른 설명은 포함하지 마세요.`;
}
