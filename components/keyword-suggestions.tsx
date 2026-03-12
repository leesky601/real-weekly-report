"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

interface KeywordSuggestionsProps {
  keywords: string[];
  onKeywordClick: (keyword: string) => void;
}

export function KeywordSuggestions({
  keywords,
  onKeywordClick,
}: KeywordSuggestionsProps) {
  const { t } = useLanguage();

  if (keywords.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-muted-foreground text-xs">{t.suggestedKeywords}</span>
      {keywords.map((keyword) => (
        <Badge
          key={keyword}
          variant="outline"
          className="cursor-pointer hover:bg-accent"
          onClick={() => onKeywordClick(keyword)}
        >
          + {keyword}
        </Badge>
      ))}
    </div>
  );
}
