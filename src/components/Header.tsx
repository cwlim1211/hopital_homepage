"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const NAV_ITEMS = [
  {
    label: "병원소개",
    href: "#about",
    children: [
      { href: "#about", label: "인사말 · 의료진소개" },
      { href: "#facilities", label: "장비 · 시설" },
      { href: "#media", label: "영상 · 블로그" },
    ],
  },
  {
    label: "진료안내",
    href: "#services",
    children: [
      { href: "#services", label: "진료과목" },
      { href: "#nerve-block", label: "영상 유도 신경차단술" },
      { href: "#ultrasound-injection", label: "초음파 유도 주사치료" },
      { href: "#pricing", label: "비급여 진료비" },
    ],
  },
  { href: "#location", label: "오시는길" },
  { href: "#booking", label: "예약안내" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);
  const [dropdownOpenLabel, setDropdownOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // 모바일 메뉴가 열려있을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 데스크톱 드롭다운: 바깥 클릭 / ESC로 닫기
  useEffect(() => {
    if (!dropdownOpenLabel) return;
    const handlePointer = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpenLabel(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpenLabel(null);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [dropdownOpenLabel]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2 py-2"
          aria-label={`${siteConfig.name} 홈으로 이동`}
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} 로고`}
            width={583}
            height={133}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav ref={navRef} className="hidden lg:flex lg:items-center lg:gap-8" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => {
            const isOpen = dropdownOpenLabel === item.label;
            return "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpenLabel(item.label)}
                onMouseLeave={() => setDropdownOpenLabel(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-primary"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setDropdownOpenLabel((v) => (v === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    // 버튼과 패널 사이를 margin이 아닌 padding으로 띄워야
                    // 그 틈에서 마우스가 벗어나 호버가 끊기지 않는다.
                    className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3"
                  >
                    <div
                      role="menu"
                      className="rounded-2xl border border-border bg-white p-2 shadow-lg shadow-ink/5"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setDropdownOpenLabel(null)}
                          className="block rounded-xl px-4 py-2.5 text-[0.9rem] font-medium text-ink-soft hover:bg-bg-soft hover:text-primary"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneTel}
            className="flex items-center gap-1.5 text-[0.95rem] font-semibold text-primary"
          >
            <Phone size={18} strokeWidth={2.25} aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.naverBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            네이버 예약
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3" aria-label="모바일 메뉴">
            {NAV_ITEMS.map((item) => {
              const isOpen = mobileOpenLabel === item.label;
              return "children" in item ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-bg-soft"
                    aria-expanded={isOpen}
                    onClick={() => setMobileOpenLabel((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-soft hover:bg-bg-soft hover:text-primary"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-bg-soft"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={siteConfig.phoneTel}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-primary"
            >
              <Phone size={20} strokeWidth={2.25} aria-hidden="true" />
              전화상담 {siteConfig.phone}
            </a>
            <a
              href={siteConfig.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-white"
            >
              네이버 예약하기
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
