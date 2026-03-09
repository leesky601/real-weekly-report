import { LoginCard } from "@/components/login-card";

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 max-w-lg w-full">
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            real-weekly-report
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Real Weekly Report automatically generates weekly work reports based
            on your Google Calendar events. Simply sign in with Google, select a
            date range, and enter your task names — our AI analyzes your calendar
            events to create a structured weekly report.
          </p>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
            <p>
              <strong>How it works:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-1 text-left mx-auto max-w-sm">
              <li>Sign in with your Google account</li>
              <li>
                The app reads your calendar events (read-only access) for the
                selected date range
              </li>
              <li>AI generates a weekly report based on your events</li>
            </ol>
          </div>
          <p className="text-muted-foreground text-xs">
            We only request read-only access to your Google Calendar events. We
            do not store your calendar data on our servers.
          </p>
        </section>
        <LoginCard />
      </div>
    </main>
  );
}
