"use client";

import { Translate } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === "en" ? "ko" : "en")}
    >
      <Translate />
      {locale === "en" ? "KO" : "EN"}
    </Button>
  );
}
