export function PrivacyContentEn() {
  return (
    <>
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: March 12, 2026</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">1. Information We Access</h2>
        <p>
          This service accesses the following information through Google sign-in:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Google account basic profile (name, email address)</li>
          <li>
            Google Calendar events (read-only access to event title, description,
            and start/end time)
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          2. How We Use Your Information
        </h2>
        <p>The information accessed is used solely for:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>User authentication and service access control</li>
          <li>
            Generating weekly work reports based on your Google Calendar events
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          3. Data Sharing, Transfer, and Disclosure
        </h2>
        <p>
          Your Google Calendar event data is shared with{" "}
          <strong>Google Gemini API</strong> (operated by Google LLC) solely for
          the purpose of generating your weekly report. The data sent includes
          event titles, descriptions, and start/end times for the date range you
          selected.
        </p>
        <p>
          <strong>
            Other than the Google Gemini API, we do not share, transfer, sell, or
            disclose your Google user data to any third party.
          </strong>
        </p>
        <p>
          Your Google user data is not used for advertising, marketing, or any
          purpose other than providing the weekly report generation service.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          4. Data Storage and Retention
        </h2>
        <p>
          This service does not store any personal information or Google user data
          on our servers. Specifically:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Google access tokens are stored only in your browser session storage
            and are deleted when you close the browser or log out.
          </li>
          <li>
            Calendar event data is processed in-memory during report generation
            and is discarded immediately after the report is created.
          </li>
          <li>
            Generated reports are displayed in your browser only and are not
            stored on our servers.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">5. Data Protection Measures</h2>
        <p>
          We implement the following measures to protect your sensitive data:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Encryption in transit:</strong> All data transmitted between
            your browser, our servers, and third-party APIs (Google Calendar API,
            Google Gemini API) is encrypted using HTTPS/TLS.
          </li>
          <li>
            <strong>No persistent storage:</strong> We do not store your Google
            user data on any server or database, eliminating the risk of data
            breaches from stored data.
          </li>
          <li>
            <strong>Minimal data access:</strong> We request only read-only
            access to calendar events (calendar.events.readonly), the minimum
            scope required to provide our service.
          </li>
          <li>
            <strong>Session-based authentication:</strong> Access tokens are
            stored only in browser session storage and are automatically cleared
            when the session ends.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">6. Your Rights</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            You can log out at any time to stop the service from accessing your
            data.
          </li>
          <li>
            You can revoke this app&apos;s access from your Google Account
            settings:{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Google Account Permissions
            </a>
          </li>
          <li>
            Since we do not store your data, no data deletion request is
            necessary.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">7. Contact</h2>
        <p>
          For privacy-related inquiries, please contact us at:{" "}
          <a
            href="mailto:lsj616123@gmail.com"
            className="text-primary underline underline-offset-2"
          >
            lsj616123@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}
