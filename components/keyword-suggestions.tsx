"use client";

import { Badge } from "@/components/ui/badge";

interface KeywordSuggestionsProps {
  keywords: string[];
  onKeywordClick: (keyword: string) => void;
}

export function KeywordSuggestions({
  keywords,
  onKeywordClick,
}: KeywordSuggestionsProps) {
  if (keywords.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-muted-foreground text-xs">추천 키워드:</span>
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
