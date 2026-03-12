import type { Dictionary } from "./types";

export const en: Dictionary = {
  appName: "real-weekly-report",
  logout: "Logout",
  backToHome: "Back to Home",
  backToLogin: "Back to Login",

  loginDescription:
    "Automatically generate weekly work reports\nbased on your Google Calendar events.",
  stepSignIn: "Sign in with Google",
  stepReadCalendar: "Read your calendar events (read-only)",
  stepAiGenerate: "AI generates your weekly report",
  signInWithGoogle: "Sign in with Google",
  loginCancelledError: "Login was cancelled.",
  loginFailedError: "Login failed. Please try again.",
  popupBlockedError: "Popup was blocked or login was cancelled.",
  readOnlyNotice:
    "We only request read-only access to your calendar.\nNo data is stored on our servers.",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",

  reportSettings: "Report Settings",
  generateFailedError: "Failed to generate report.",
  unknownError: "Unknown error",

  startDate: "Start Date",
  endDate: "End Date",
  endDateError: "End date must be after start date.",
  taskLabel: "Tasks",
  taskPlaceholder: "Type a task name and press Enter",
  generating: "Generating...",
  generateReport: "Generate Report",

  results: "Results",
  copied: "Copied",
  copyAll: "Copy All",
  noMatchMessage:
    "No matching events found for the selected period. Try adjusting task names or dates.",
  noMatch: "No match",

  suggestedKeywords: "Suggested keywords:",

  quotaTitle: "API Quota Exceeded",
  quotaDescription:
    "Gemini API quota has been exhausted. Please try again later.",
  confirm: "OK",
};
