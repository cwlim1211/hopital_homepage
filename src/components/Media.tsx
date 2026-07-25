import { BookOpen, Tv, Video } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const CHANNELS = [
  {
    icon: BookOpen,
    title: `${siteConfig.name.replace("통증의학과의원", "")} 네이버 블로그`,
    desc: "원장이 직접 작성하는 질환 정보와 치료 이야기를 연재합니다.",
    cta: "블로그에서 읽기",
    href: siteConfig.naverBlogUrl,
  },
  {
    icon: Tv,
    title: `${siteConfig.name.replace("통증의학과의원", "")} 네이버 TV`,
    desc: "네이버TV에서도 동일한 영상 콘텐츠를 보실 수 있습니다.",
    cta: "네이버TV에서 보기",
    href: siteConfig.naverTvUrl,
  },
  {
    icon: Video,
    title: `${siteConfig.name.replace("통증의학과의원", "")} 유튜브`,
    desc: "통증 질환 정보와 병원 소식을 영상으로 전하는 공식 유튜브 채널입니다.",
    cta: "유튜브에서 보기",
    href: siteConfig.youtubeUrl,
  },
];

export default function Media() {
  return (
    <section id="media" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
          {siteConfig.name} 공식{" "}
          <br className="sm:hidden" />
          채널
        </h2>
        <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink-soft">
          의료진이 직접 만드는 공식 영상과 블로그를 확인해보세요
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {CHANNELS.map(({ icon: Icon, title, desc, cta, href }) => (
          <div
            key={title}
            className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
              <Icon size={24} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-[1.08rem] font-bold text-ink">{title}</h3>
            <p className="mt-2 flex-1 text-[0.95rem] leading-[1.7] text-ink-soft">{desc}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="-mb-2 mt-2 inline-flex items-center py-3 text-[0.95rem] font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark"
            >
              {cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
