import Image from "next/image";
import { Award, GraduationCap, Stethoscope, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const CREDENTIAL_GROUPS = [
  {
    label: "학력",
    icon: GraduationCap,
    items: ["서울대학교 의과대학 및 대학원 졸업"],
  },
  {
    label: "경력",
    icon: Stethoscope,
    items: [
      "서울대학교병원 인턴",
      "서울대학교병원 마취통증의학과 전문의",
      "(현) 경희대학교 의과대학 외래교수",
    ],
  },
  {
    label: "수상",
    icon: Award,
    items: ["서울대학교병원 우수인턴", "전국 전공의자율평가 우수상"],
  },
  {
    label: "학회활동",
    icon: Users,
    items: [
      "대한마취통증학회 정회원",
      "세계통증학회(WIP) 정회원",
      "대학척추통증학회 정회원",
      "대한통증연구학회 평생회원",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
          좋은 치료는 좋은 진단에서 시작됩니다.
        </h2>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start lg:gap-16">
        <div>
          <p className="text-[1.2rem] font-extrabold leading-[1.6] text-primary">
            통증의 원인을 정확히 찾고, 근본적인 회복까지 함께합니다.
          </p>

          <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.85] text-ink-soft">
            <p>
              안녕하십니까.
              <br />
              화이팅통증의학과의원 대표원장 {siteConfig.directorName}입니다.
            </p>
            <p>
              통증은 같은 부위가 아프더라도 원인은 모두 다를 수 있습니다.
              그래서 저는 치료보다 먼저 환자분의 이야기를 충분히 듣고,
              세심한 신체검진과 정확한 영상검사를 통해 통증의 원인을 찾는
              것을 가장 중요하게 생각합니다.
            </p>
            <p className="font-bold text-ink">
              정확한 진단이 이루어져야 정확한 치료가 가능합니다.
            </p>
            <p>
              저희는 초음파와 C-arm 영상장비를 이용하여 병변을 직접
              확인하며, 필요한 부위에 가장 정밀하고 안전한 주사치료를
              시행합니다.
            </p>
            <p>
              하지만 치료는 통증을 줄이는 것에서 끝나지 않습니다.
              체외충격파, PDRN 재생주사, 재활운동과 도수치료를 함께
              시행하여 손상된 조직의 회복을 돕고, 통증이 다시 반복되지
              않도록 근본적인 회복을 목표로 합니다.
            </p>
            <p className="font-bold text-ink">
              화이팅통증의학과의원은 과잉진료보다 정확한 진단을, 일시적인
              처치보다 근본적인 회복을 우선합니다.
            </p>
            <p>
              환자분이 다시 편안한 일상을 되찾을 수 있도록,
              <br />
              언제나 원칙에 충실한 진료로 함께하겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>
          <p className="mt-6 text-right text-[1.05rem] font-bold text-ink">
            {siteConfig.name} 원장 {siteConfig.directorName} 드림
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-bg-soft p-7 sm:p-8 md:sticky md:top-28">
          <div className="overflow-hidden rounded-2xl bg-bg-soft">
            <Image
              src="/director.png"
              alt={`${siteConfig.name} 대표원장 ${siteConfig.directorName}`}
              width={1448}
              height={1086}
              className="aspect-[4/5] w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5">
            <p className="text-[0.9rem] font-medium text-ink-soft">대표원장</p>
            <p className="text-xl font-bold text-ink">{siteConfig.directorName}</p>
          </div>

          <div className="mt-6 space-y-5 border-t border-border pt-6">
            {CREDENTIAL_GROUPS.map(({ label, icon: Icon, items }) => (
              <div key={label}>
                <div className="flex items-center gap-2 text-[0.9rem] font-bold text-primary">
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </div>
                <ul className="mt-2 space-y-1.5">
                  {items.map((text) => (
                    <li
                      key={text}
                      className="text-[0.95rem] leading-relaxed text-ink-soft"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
