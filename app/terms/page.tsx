import Link from "next/link";

export const metadata = {
  title: "서비스 이용약관 - 주간보고 자동 생성",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 p-4 py-12 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold">서비스 이용약관</h1>
      <p className="text-muted-foreground">최종 수정일: 2026년 2월 26일</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">1. 서비스 개요</h2>
        <p>
          &ldquo;주간보고 자동 생성&rdquo;(이하 &ldquo;본 서비스&rdquo;)은
          사용자의 Google Calendar 일정을 분석하여 AI 기반 주간보고서를 자동
          생성하는 웹 서비스입니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">2. 이용 조건</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>본 서비스를 이용하려면 Google 계정이 필요합니다.</li>
          <li>
            사용자는 Google Calendar 읽기 권한을 본 서비스에 부여하는 것에
            동의해야 합니다.
          </li>
          <li>본 서비스는 업무 목적의 주간보고 생성 용도로만 사용해야 합니다.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">3. 서비스 제공 및 변경</h2>
        <p>
          본 서비스는 현재 상태 그대로(&ldquo;as-is&rdquo;) 제공됩니다.
          서비스의 내용, 기능, UI는 사전 공지 없이 변경될 수 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">4. AI 생성 콘텐츠</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            보고서는 AI(Google Gemini)가 자동 생성하며, 정확성을 보장하지
            않습니다.
          </li>
          <li>
            생성된 보고서의 내용을 검토하고 수정하는 것은 사용자의 책임입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">5. 면책 조항</h2>
        <p>
          본 서비스 이용으로 인해 발생하는 직접적, 간접적 손해에 대해 서비스
          제공자는 책임을 지지 않습니다. AI가 생성한 보고서의 내용에 대한
          최종 책임은 사용자에게 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">6. 서비스 중단</h2>
        <p>
          서비스 제공자는 사전 통보 없이 서비스를 일시 중단하거나 종료할 수
          있습니다.
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
