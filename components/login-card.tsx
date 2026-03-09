"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import {
  GoogleLogo,
  CalendarCheck,
  Robot,
  SignIn,
} from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginCard() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const googleLogin = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/calendar.events.readonly",
    onSuccess: (response) => {
      setError(null);
      login(response.access_token);
      router.push("/report");
    },
    onError: (err) => {
      if (err.error === "access_denied") {
        setError("로그인이 취소되었습니다.");
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    },
    onNonOAuthError: () => {
      setError("팝업이 차단되었거나 로그인이 취소되었습니다.");
    },
  });

  const steps = [
    { icon: SignIn, text: "Sign in with Google" },
    { icon: CalendarCheck, text: "Read your calendar events (read-only)" },
    { icon: Robot, text: "AI generates your weekly report" },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold tracking-tight">
          real-weekly-report
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Automatically generate weekly work reports
          <br />
          based on your Google Calendar events.
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

        <Button className="w-full gap-2" onClick={() => googleLogin()}>
          <GoogleLogo weight="bold" />
          Google로 로그인
        </Button>

        {error && (
          <p className="text-destructive text-sm text-center">{error}</p>
        )}

        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          We only request read-only access to your calendar.
          <br />
          No data is stored on our servers.
        </p>
      </CardContent>

      <CardFooter className="justify-center gap-3 text-xs text-muted-foreground">
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-foreground"
        >
          개인정보처리방침
        </Link>
        <span>|</span>
        <Link
          href="/terms"
          className="underline underline-offset-2 hover:text-foreground"
        >
          이용약관
        </Link>
      </CardFooter>
    </Card>
  );
}
