"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GoogleLogo,
  CalendarCheck,
  Robot,
  SignIn,
} from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth-context";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LanguageToggle } from "@/components/language-toggle";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const SCOPE =
  "openid profile email https://www.googleapis.com/auth/calendar.events.readonly";

export function LoginCard() {
  const router = useRouter();
  const { login } = useAuth();
  const { t } = useLanguage();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const errorParam = params.get("error");

    if (accessToken) {
      login(accessToken);
      window.history.replaceState({}, "", window.location.pathname);
      router.push("/report");
    } else if (errorParam === "access_denied") {
      setError(t.loginCancelledError);
      window.history.replaceState({}, "", window.location.pathname);
    } else if (errorParam) {
      setError(t.loginFailedError);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [login, router, t]);

  function handleLogin() {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?.trim();
    const redirectUri = window.location.origin;

    const params = new URLSearchParams({
      client_id: clientId!,
      redirect_uri: redirectUri,
      response_type: "token",
      scope: SCOPE,
      prompt: "select_account",
      include_granted_scopes: "true",
    });

    window.location.href = `${GOOGLE_AUTH_URL}?${params.toString()}`;
  }

  const steps = [
    { icon: SignIn, text: t.stepSignIn },
    { icon: CalendarCheck, text: t.stepReadCalendar },
    { icon: Robot, text: t.stepAiGenerate },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-end -mt-2 -mr-2">
          <LanguageToggle />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">
          {t.appName}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed whitespace-pre-line">
          {t.loginDescription}
        </p>
      </CardHeader>

      <CardContent className="grid gap-5 pt-2">
        <div className="grid gap-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="size-4" weight="bold" />
              </div>
              <span className="text-sm text-muted-foreground">{step.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t" />

        <Button className="w-full gap-2" onClick={handleLogin}>
          <GoogleLogo weight="bold" />
          {t.signInWithGoogle}
        </Button>

        {error && (
          <p className="text-destructive text-sm text-center">{error}</p>
        )}

        <p className="text-center text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
          {t.readOnlyNotice}
        </p>
      </CardContent>

      <CardFooter className="justify-center gap-3 text-xs text-muted-foreground">
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-foreground"
        >
          {t.privacyPolicy}
        </Link>
        <span>|</span>
        <Link
          href="/terms"
          className="underline underline-offset-2 hover:text-foreground"
        >
          {t.termsOfService}
        </Link>
      </CardFooter>
    </Card>
  );
}
