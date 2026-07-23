import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { PersonStanding, Syringe, Zap } from "lucide-react";

const SERVICES: {
  icon?: LucideIcon;
  iconSrc?: string;
  title: string;
  desc: string;
  href?: string;
}[] = [
  {
    iconSrc: "/icon-c-arm.svg",
    title: "영상 유도 신경차단술",
    desc: "실시간 투시영상(C-arm)으로 신경과 혈관을 피해, 통증의 원인이 되는 부위에 정확하게 약물을 주입합니다.",
    href: "#nerve-block",
  },
  {
    iconSrc: "/icon-ultrasound-probe.svg",
    title: "초음파 유도 주사치료",
    desc: "초음파로 근육, 인대, 힘줄, 신경 상태를 실시간으로 확인하며 안전하고 정확한 위치에 주사치료를 시행합니다.",
    href: "#ultrasound-injection",
  },
  {
    icon: Syringe,
    title: "프롤로치료(DNA주사)",
    desc: "DNA 주사로 약해진 인대와 힘줄을 재생시켜, 통증이 다시 반복되지 않도록 돕습니다.",
  },
  {
    icon: Zap,
    title: "체외충격파치료",
    desc: "수술 없이 충격파의 힘으로 손상된 조직의 자연스러운 회복을 이끌어냅니다.",
  },
  {
    icon: PersonStanding,
    title: "도수치료 · 통증재활운동",
    desc: "숙련된 치료사의 손끝으로 무너진 근골격계 균형을 바로잡고, 맞춤형 운동으로 재발 없는 회복을 돕습니다.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
            정확한 진단, 맞춤형 통증{" "}
            <br className="sm:hidden" />
            치료
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink-soft">
            환자 한 분 한 분의 이야기를 충분히 듣고, 원인부터 정확히
            짚어내는 치료 계획을 세웁니다
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, iconSrc, title, desc, href }) => {
            const card = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  {Icon ? (
                    <Icon size={24} aria-hidden="true" />
                  ) : iconSrc ? (
                    <Image src={iconSrc} alt="" width={24} height={24} aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="mt-4 text-[1.08rem] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-ink-soft">{desc}</p>
              </>
            );

            const className =
              "rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md hover:shadow-primary/5";

            return href ? (
              <a key={title} href={href} className={className}>
                {card}
              </a>
            ) : (
              <div key={title} className={className}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
