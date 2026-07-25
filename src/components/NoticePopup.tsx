"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "notice-2026-08-dismissed-until";

export default function NoticePopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissedUntil = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toDateString();
    if (dismissedUntil !== today) {
      setOpen(true);
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  const hideToday = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
    close();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="8월 진료 안내 공지"
      onClick={close}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="팝업 닫기"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-white"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <Image
          src="/notice-2026-08.png"
          alt="8월 진료 안내: 8월 15일(토) 광복절, 16일(일), 17일(월) 대체공휴일은 휴진입니다. 진료 예약 및 내원에 착오 없으시길 바랍니다."
          width={1369}
          height={1149}
          className="h-auto w-full"
          priority
        />

        <button
          type="button"
          onClick={hideToday}
          className="flex h-12 w-full items-center justify-center border-t border-border text-[0.95rem] font-medium text-ink-soft transition-colors hover:bg-bg-soft"
        >
          오늘 하루 보지 않기
        </button>
      </div>
    </div>
  );
}
