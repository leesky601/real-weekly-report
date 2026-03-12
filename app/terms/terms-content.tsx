"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import { TermsContentEn } from "./content-en";
import { TermsContentKo } from "./content-ko";

export function TermsContent() {
  const { locale, t } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-4 py-12 text-sm leading-relaxed">
      <div className="flex justify-end">
        <LanguageToggle />
      </div>
      {locale === "en" ? <TermsContentEn /> : <TermsContentKo />}
      <div className="border-t pt-6">
        <Link
          href="/login"
          className="text-primary underline underline-offset-2"
        >
          {t.backToLogin}
        </Link>
      </div>
    </main>
  );
}
