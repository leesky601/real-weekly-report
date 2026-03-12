"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import { PrivacyContentEn } from "./content-en";
import { PrivacyContentKo } from "./content-ko";

export function PrivacyContent() {
  const { locale, t } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-4 py-12 text-sm leading-relaxed">
      <div className="flex justify-end">
        <LanguageToggle />
      </div>
      {locale === "en" ? <PrivacyContentEn /> : <PrivacyContentKo />}
      <div className="border-t pt-6">
        <Link href="/" className="text-primary underline underline-offset-2">
          {t.backToHome}
        </Link>
      </div>
    </main>
  );
}
