export type Locale = "en" | "ko";

export interface Dictionary {
  // Common
  appName: string;
  logout: string;
  backToHome: string;
  backToLogin: string;

  // Login card
  loginDescription: string;
  stepSignIn: string;
  stepReadCalendar: string;
  stepAiGenerate: string;
  signInWithGoogle: string;
  loginCancelledError: string;
  loginFailedError: string;
  popupBlockedError: string;
  readOnlyNotice: string;
  privacyPolicy: string;
  termsOfService: string;

  // Report page
  reportSettings: string;
  generateFailedError: string;
  unknownError: string;

  // Report form
  startDate: string;
  endDate: string;
  endDateError: string;
  taskLabel: string;
  taskPlaceholder: string;
  generating: string;
  generateReport: string;

  // Report result
  results: string;
  copied: string;
  copyAll: string;
  noMatchMessage: string;
  noMatch: string;

  // Keyword suggestions
  suggestedKeywords: string;

  // Quota warning
  quotaTitle: string;
  quotaDescription: string;
  confirm: string;
}
