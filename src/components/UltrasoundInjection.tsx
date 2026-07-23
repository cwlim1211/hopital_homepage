import Image from "next/image";
import { Bone, CheckCircle2, Star } from "lucide-react";

const INDICATIONS = [
  "오십견(유착성 관절낭염), 회전근개 질환 등 어깨 통증",
  "무릎 관절염, 인대 손상으로 인한 통증",
  "테니스엘보, 골퍼엘보 등 팔꿈치 통증",
  "손목, 발목 등 관절 주변 통증",
];

export default function UltrasoundInjection() {
  return (
    <section
      id="ultrasound-injection"
      className="bg-bg-soft py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-1">
            <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
              초음파 유도 주사치료
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-ink-soft">
              초음파로 근육, 인대, 힘줄, 신경의 상태를 실시간으로 확인하며
              안전한 위치에 정확하게 주사치료를 시행합니다. 방사선 노출이
              없어 안심할 수 있고, 검사와 치료를 동시에 진행할 수
              있습니다. 초음파 검사는 의사의 지식과 숙련도가 중요합니다.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-[1.05rem] font-bold text-ink">
                <Bone size={22} className="text-primary" aria-hidden="true" />
                치료대상
              </div>
              <ul className="mt-4 space-y-3">
                {INDICATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.98rem] text-ink-soft">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6">
              <div className="flex items-center gap-2 text-[1.02rem] font-bold text-primary">
                <Star size={20} aria-hidden="true" />
                화이팅의 기준
              </div>
              <p className="mt-3 text-[0.98rem] leading-[1.8] text-ink-soft">
                목표는 수 mm의 공간입니다.
                <br />
                관절 내부, 점액낭 등{" "}
                <span className="font-bold text-primary">
                  수 mm의 얇은 공간에 정확하게 약물이 들어가는지 실시간으로
                  확인
                </span>
                해가며 정확하게 약물을 투여합니다.
              </p>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-3xl border border-border md:order-2">
            <div className="relative aspect-[869/825] w-full">
              <Image
                src="/ultrasound-injection-photo.png"
                alt="초음파 영상으로 삼각근, 점액낭, 극상건, 상완골을 확인하며 시행하는 초음파 유도 주사치료"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
