import Image from "next/image";
import { Car, Clock, MapPin, Navigation, TrainFront } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
          찾아오시는 길 & 진료시간
        </h2>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3">
          <a
            href={siteConfig.naverMapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="네이버 지도에서 길찾기 (새 창 열림)"
            className="group relative block w-full overflow-hidden rounded-3xl border border-border"
            style={{ aspectRatio: "1195 / 893" }}
          >
            <Image
              src="/map.png"
              alt={`${siteConfig.name} 위치 약도 — ${siteConfig.address} ${siteConfig.addressDetail}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent"
            />
            <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[0.9rem] font-semibold text-white shadow-sm transition-colors group-hover:bg-primary-dark sm:text-[0.95rem]">
              <Navigation size={16} className="shrink-0" aria-hidden="true" />
              네이버 지도 길찾기
            </span>
          </a>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-[1.02rem] font-semibold text-ink">{siteConfig.address}</p>
                <p className="text-[0.95rem] text-ink-soft">{siteConfig.addressDetail}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrainFront size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                지하철 1호선 청량리역 6번 출구
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Car size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                현대자동차 건물 옆 지상주차장 이용 (1시간 무료)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-white p-7 sm:p-8 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Clock size={22} className="text-primary" aria-hidden="true" />
            <h3 className="text-lg font-bold text-ink">진료시간</h3>
          </div>
          <dl className="mt-5 divide-y divide-border">
            {siteConfig.hours.map(({ day, time }) => (
              <div
                key={day}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-[0.98rem] text-ink-soft">{day}</dt>
                <dd className="text-[0.98rem] font-semibold text-ink">{time}</dd>
              </div>
            ))}
          </dl>
          <a
            href={siteConfig.phoneTel}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary-tint px-5 py-3.5 text-[0.98rem] font-semibold text-primary"
          >
            전화문의 {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
