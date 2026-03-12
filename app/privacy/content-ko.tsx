export function PrivacyContentKo() {
  return (
    <>
      <h1 className="text-2xl font-bold">개인정보처리방침</h1>
      <p className="text-muted-foreground">최종 수정일: 2026년 3월 12일</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">1. 수집하는 정보</h2>
        <p>본 서비스는 Google 로그인을 통해 다음 정보에 접근합니다:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Google 계정 기본 프로필 (이름, 이메일 주소)</li>
          <li>
            Google Calendar 일정 (일정 제목, 설명, 시작/종료 시간에 대한 읽기
            전용 접근)
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">2. 정보 이용 목적</h2>
        <p>접근한 정보는 다음 목적으로만 사용됩니다:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>사용자 인증 및 서비스 접근 제어</li>
          <li>Google Calendar 일정을 기반으로 주간 업무 보고서 생성</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">3. 데이터 공유, 이전 및 공개</h2>
        <p>
          Google Calendar 일정 데이터는 주간보고서 생성 목적으로{" "}
          <strong>Google Gemini API</strong>(Google LLC 운영)에 공유됩니다.
          전송되는 데이터에는 선택한 기간의 일정 제목, 설명, 시작/종료 시간이
          포함됩니다.
        </p>
        <p>
          <strong>
            Google Gemini API 외에, 귀하의 Google 사용자 데이터를 제3자에게 공유,
            이전, 판매 또는 공개하지 않습니다.
          </strong>
        </p>
        <p>
          귀하의 Google 사용자 데이터는 광고, 마케팅 또는 주간보고서 생성 서비스
          제공 외의 목적으로 사용되지 않습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">4. 데이터 저장 및 보유</h2>
        <p>
          본 서비스는 서버에 개인정보나 Google 사용자 데이터를 저장하지 않습니다.
          구체적으로:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Google 액세스 토큰은 브라우저 세션 스토리지에만 저장되며, 브라우저를
            닫거나 로그아웃하면 삭제됩니다.
          </li>
          <li>
            캘린더 일정 데이터는 보고서 생성 중 메모리에서만 처리되며, 보고서
            생성 직후 폐기됩니다.
          </li>
          <li>
            생성된 보고서는 브라우저에서만 표시되며 서버에 저장되지 않습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">5. 데이터 보호 조치</h2>
        <p>민감한 데이터 보호를 위해 다음 조치를 시행합니다:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>전송 중 암호화:</strong> 브라우저, 서버, 제3자 API(Google
            Calendar API, Google Gemini API) 간 전송되는 모든 데이터는 HTTPS/TLS로
            암호화됩니다.
          </li>
          <li>
            <strong>영구 저장 없음:</strong> 서버나 데이터베이스에 Google 사용자
            데이터를 저장하지 않아, 저장된 데이터로 인한 유출 위험이 없습니다.
          </li>
          <li>
            <strong>최소 데이터 접근:</strong> 서비스 제공에 필요한 최소 범위인
            캘린더 일정 읽기 전용 접근(calendar.events.readonly)만 요청합니다.
          </li>
          <li>
            <strong>세션 기반 인증:</strong> 액세스 토큰은 브라우저 세션
            스토리지에만 저장되며, 세션 종료 시 자동으로 삭제됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">6. 이용자의 권리</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>언제든지 로그아웃하여 서비스의 데이터 접근을 중단할 수 있습니다.</li>
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
          <li>
            데이터를 저장하지 않으므로, 별도의 데이터 삭제 요청이 필요하지
            않습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">7. 문의</h2>
        <p>
          개인정보 관련 문의는 다음으로 연락해 주세요:{" "}
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
