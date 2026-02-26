"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface QuotaWarningDialogProps {
  open: boolean;
  onClose: () => void;
}

export function QuotaWarningDialog({
  open,
  onClose,
}: QuotaWarningDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={(v) => !v && onClose()}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>API 할당량 소진</AlertDialogTitle>
          <AlertDialogDescription>
            Gemini API 할당량이 소진되었습니다. 잠시 후 다시 시도해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
