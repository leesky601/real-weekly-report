import type { Dictionary } from "./types";

export const ko: Dictionary = {
  appName: "real-weekly-report",
  logout: "로그아웃",
  backToHome: "홈으로 돌아가기",
  backToLogin: "로그인 페이지로 돌아가기",

  loginDescription:
    "Google 캘린더 일정을 기반으로\n주간 업무 보고서를 자동 생성합니다.",
  stepSignIn: "Google 로그인",
  stepReadCalendar: "캘린더 일정 읽기 (읽기 전용)",
  stepAiGenerate: "AI가 주간보고서 생성",
  signInWithGoogle: "Google로 로그인",
  loginCancelledError: "로그인이 취소되었습니다.",
  loginFailedError: "로그인에 실패했습니다. 다시 시도해주세요.",
  popupBlockedError: "팝업이 차단되었거나 로그인이 취소되었습니다.",
  readOnlyNotice:
    "캘린더 읽기 전용 권한만 요청합니다.\n서버에 데이터를 저장하지 않습니다.",
  privacyPolicy: "개인정보처리방침",
  termsOfService: "이용약관",

  reportSettings: "보고서 설정",
  generateFailedError: "보고서 생성에 실패했습니다.",
  unknownError: "알 수 없는 오류",

  startDate: "시작일",
  endDate: "종료일",
  endDateError: "종료일은 시작일 이후여야 합니다.",
  taskLabel: "과제명",
  taskPlaceholder: "과제명 입력 후 Enter",
  generating: "생성 중...",
  generateReport: "보고서 생성",

  results: "생성 결과",
  copied: "복사 완료",
  copyAll: "전체 복사",
  noMatchMessage:
    "선택한 기간에 매칭되는 일정이 없습니다. 과제명이나 기간을 조정해보세요.",
  noMatch: "매칭 실패",

  suggestedKeywords: "추천 키워드:",

  quotaTitle: "API 할당량 소진",
  quotaDescription:
    "Gemini API 할당량이 소진되었습니다. 잠시 후 다시 시도해주세요.",
  confirm: "확인",
};
