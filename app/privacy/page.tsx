import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 - 주간보고 자동 생성",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 p-4 py-12 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold">개인정보처리방침</h1>
      <p className="text-muted-foreground">최종 수정일: 2026년 2월 26일</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">1. 수집하는 개인정보</h2>
        <p>본 서비스는 Google 로그인을 통해 다음 정보에 접근합니다:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Google 계정 기본 프로필 (이름, 이메일)</li>
          <li>Google Calendar 일정 (읽기 전용)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">2. 개인정보의 이용 목적</h2>
        <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>사용자 인증 및 서비스 접근 제어</li>
          <li>Google Calendar 일정을 기반으로 주간보고서 자동 생성</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">3. 개인정보의 보관 및 저장</h2>
        <p>
          본 서비스는 별도의 서버에 개인정보를 저장하지 않습니다. Google
          액세스 토큰은 사용자의 브라우저 세션에만 임시 저장되며, 브라우저를
          닫거나 로그아웃 시 즉시 삭제됩니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">4. 제3자 제공</h2>
        <p>
          Calendar 일정 데이터는 보고서 생성을 위해 Google Gemini AI API로
          전송됩니다. 이 외에 어떠한 제3자에게도 개인정보를 제공하지 않습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">5. 사용자의 권리</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>언제든지 로그아웃하여 서비스 접근을 중단할 수 있습니다.</li>
          <li>
            Google 계정 설정에서 본 앱의 접근 권한을 철회할 수 있습니다:{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Google 계정 권한 관리
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">6. 문의</h2>
        <p>
          개인정보 관련 문의는 서비스 관리자에게 연락해주시기 바랍니다.
        </p>
      </section>

      <div className="border-t pt-6">
        <Link href="/login" className="text-primary underline underline-offset-2">
          로그인 페이지로 돌아가기
        </Link>
      </div>
    </main>
  );
}
