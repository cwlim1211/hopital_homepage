import Image from "next/image";

const FACILITIES = [
  {
    image: "/equipment-carm.webp",
    title: "C-arm (투시 영상장치)",
    desc: "실시간으로 주사 위치를 확인하여, 신경과 혈관을 피해 병변 위치에 정확하게 약물을 주입합니다.",
  },
  {
    image: "/equipment-ultrasound.webp",
    title: "초음파 장비",
    desc: "근육, 인대, 힘줄, 신경 상태를 실시간으로 확인합니다. 초음파 검사는 의사의 지식과 숙련도가 중요합니다.",
  },
  {
    image: "/equipment-eswt.webp",
    title: "체외충격파 ESWT (초점형)",
    desc: "초점형의 강한 충격파가 깊이 있는 힘줄과 인대에 자극을 줘서 회복을 도와줍니다.",
  },
  {
    image: "/equipment-xray.webp",
    title: "디지털 X-ray",
    desc: "근골격계 질환 감별을 위한 기본 검사로, 적은 피폭량으로도 선명한 영상 촬영이 가능합니다.",
  },
  {
    image: "/equipment-manual.png",
    title: "도수치료",
    desc: "근육과 관절의 균형을 회복하여 통증 완화와 기능 회복을 돕는 치료입니다.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-bg-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
            정확한 진단을 위한 정밀{" "}
            <br className="sm:hidden" />
            장비
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink-soft">
            눈으로 직접 확인하는 진단이 정확한 치료의 시작입니다
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map(({ image, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-md hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] w-full bg-bg-soft">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[1.08rem] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-ink-soft">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
