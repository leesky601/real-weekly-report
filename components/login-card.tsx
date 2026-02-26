"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogo } from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">real-weekly-report</CardTitle>
        <CardDescription>
          Google 캘린더 일정을 기반으로 주간보고를 자동 생성합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Button className="w-full gap-2" onClick={() => googleLogin()}>
          <GoogleLogo weight="bold" />
          Google로 로그인
        </Button>
        {error && (
          <p className="text-destructive text-sm text-center">{error}</p>
        )}
      </CardContent>
      <CardFooter className="justify-center gap-3 text-xs text-muted-foreground">
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          개인정보처리방침
        </Link>
        <span>|</span>
        <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
          이용약관
        </Link>
      </CardFooter>
    </Card>
  );
}
