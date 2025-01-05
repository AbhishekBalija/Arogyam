import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d41373d430220f9198f8a771b4cc790c@o4508591141617664.ingest.de.sentry.io/4508591146008656",
  tracesSampleRate: 1,
  debug: false,
});
