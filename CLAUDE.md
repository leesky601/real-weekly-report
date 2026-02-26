# Real Weekly Report

주간 보고서 작성 애플리케이션.

## 기술 스택

- **프레임워크**: Next.js 16.1.6 (App Router), React 19, TypeScript
- **스타일링**: Tailwind CSS v4, tw-animate-css
- **UI 컴포넌트**: shadcn (base-ui/radix-ui)
- **아이콘**: @phosphor-icons/react
- **폰트**: Raleway (기본), Geist Sans, Geist Mono
- **패키지 매니저**: Bun

## 프로젝트 구조

```
app/           → Next.js App Router 페이지 및 레이아웃
components/    → React 컴포넌트
  ui/          → shadcn UI 기본 요소
lib/           → 유틸리티 함수
public/        → 정적 자산
```

## 명령어

```bash
bun run dev    # 개발 서버 (localhost:3000)
bun run build  # 프로덕션 빌드
bun run lint   # ESLint 검사
```

## 코드 규칙

- 컴포넌트 파일: kebab-case (예: `alert-dialog.tsx`)
- `@/` path alias로 프로젝트 루트 참조
- CSS: oklch 색상 시스템, purple 계열 primary 색상
- `cn()` 유틸리티로 className 병합 (clsx + tailwind-merge)

## 개발 워크플로우

### TDD (테스트 주도 개발)
1. 수용 기준을 바탕으로 실패하는 테스트를 먼저 작성한다
2. 테스트를 통과하는 최소한의 코드를 구현한다
3. 테스트가 통과하는 상태를 유지하면서 리팩터링한다

### 커밋 규칙
- 기능 단위로 커밋한다. 하나의 커밋에 여러 기능을 섞지 않는다
- Conventional Commits 형식을 사용한다: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`

## Plan Mode 규칙
- 계획은 최대한 간결하게 작성한다. 문법보다 간결함이 우선이다.
- 모든 계획의 마지막에 미결정 질문 목록을 추가한다

## 작업 규칙
- 모든 작업에 수용 기준(Acceptance Criteria)을 반드시 포함한다:
  1. 구현이 올바른지 검증할 구체적 테스트/명령을 정의한다
  2. 적합성 기준 형식을 사용한다: 구체적 입력과 기대 출력을 명시한다
  3. 구현 후: 모든 수용 기준을 실행하고 통과를 확인한다
