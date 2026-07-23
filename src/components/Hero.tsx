import Image from "next/image";
import {
  CalendarCheck,
  GraduationCap,
  HeartHandshake,
  Phone,
  Radar,
  ShieldCheck,
  Syringe,
  Target,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const HIGHLIGHTS = [
  { icon: Target, label: "정확한 진단" },
  { icon: Radar, label: "정밀한 영상유도" },
  { icon: Syringe, label: "꼭 필요한 치료" },
  { icon: HeartHandshake, label: "따뜻한 진료" },
];

const CREDENTIALS = [
  { icon: GraduationCap, title: "서울대학교 졸업", caption: "SEOUL NATIONAL UNIVERSITY" },
  { icon: ShieldCheck, title: "통증의학과 전문의", caption: "PAIN MEDICINE SPECIALIST" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary-tint to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-primary-soft/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-[1.2rem] font-bold tracking-wide text-primary sm:text-[1.35rem]">
            {siteConfig.name} 청량리점
          </p>
          <h1 className="mt-4 text-[2.2rem] font-extrabold leading-[1.4] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            당신의 통증에
            <br />
            진심으로 함께합니다
          </h1>

          <div className="mt-6 h-1 w-12 rounded-full bg-primary" aria-hidden="true" />

          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.85] text-ink-soft">
            환자분의 이야기를 충분히 듣고,
            <br />
            정확한 진단과 정밀한 영상유도 치료로
            <br />
            다시 편안한 일상을 되찾으실 때까지{" "}
            <span className="font-semibold text-primary">함께하겠습니다.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 text-[1.05rem] font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary-dark"
              style={{ height: "3.25rem" }}
            >
              <CalendarCheck size={20} aria-hidden="true" />
              네이버로 예약하기
            </a>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 text-[1.05rem] font-semibold text-primary transition-colors hover:bg-primary-tint"
              style={{ height: "3.25rem" }}
            >
              <Phone size={20} aria-hidden="true" />
              전화 상담
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 text-[0.9rem] font-medium text-ink-soft"
              >
                <Icon size={26} strokeWidth={1.75} className="text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10">
            <div className="relative aspect-[798/880] w-full">
              <Image
                src="/hero-photo.png"
                alt={`${siteConfig.name} 대표원장 ${siteConfig.directorName}`}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute inset-x-4 -bottom-8 flex flex-col gap-3 rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-lg shadow-ink/10 backdrop-blur sm:inset-x-8 xl:flex-row xl:items-center xl:gap-4">
            {CREDENTIALS.map(({ icon: Icon, title, caption }, i) => (
              <div
                key={title}
                className={`flex flex-1 items-center gap-3 ${
                  i > 0 ? "border-t border-border pt-3 xl:border-t-0 xl:pt-0" : ""
                }`}
              >
                {i > 0 && (
                  <div className="hidden h-10 w-px shrink-0 bg-border xl:block" aria-hidden="true" />
                )}
                <Icon size={26} className="shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-[0.92rem] font-bold text-ink">{title}</p>
                  <p className="truncate text-[0.68rem] font-medium tracking-wide text-ink-soft">
                    {caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
