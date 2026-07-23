import { BookOpen, CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function BookingCTA() {
  return (
    <section id="booking" className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[1.75rem] font-extrabold text-white sm:text-[2.1rem]">
          지금 바로{" "}
          <br className="sm:hidden" />
          편하게 예약하세요
        </h2>
        <p className="mt-4 text-[1.05rem] leading-[1.75] text-white/85">
          통증 때문에 망설이고 계셨다면, 지금이 첫걸음을 내딛을 때입니다.{" "}
          <br className="hidden sm:block" />
          네이버 예약이나 전화로 편하게 진료를 예약하실 수 있습니다.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.naverBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 text-[1.05rem] font-bold text-primary shadow-sm transition-transform hover:scale-[1.03]"
            style={{ height: "3.25rem" }}
          >
            <CalendarCheck size={20} aria-hidden="true" />
            네이버 예약하기
          </a>
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 text-[1.05rem] font-bold text-white transition-colors hover:bg-white/10"
            style={{ height: "3.25rem" }}
          >
            <Phone size={20} aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>

        <a
          href={siteConfig.naverBlogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="-mb-3 mt-6 inline-flex items-center gap-2 py-3 text-[0.95rem] font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
        >
          <BookOpen size={18} aria-hidden="true" />
          네이버 블로그에서 병원 소식 더 보기
        </a>
      </div>
    </section>
  );
}
