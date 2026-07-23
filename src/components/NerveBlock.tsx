import Image from "next/image";
import { Bone, CheckCircle2, Star } from "lucide-react";

const INDICATIONS = [
  "목, 허리 디스크(추간판 탈출증)로 인한 방사통",
  "척추관협착증으로 인한 다리 저림, 힘빠짐",
  "척추 시술, 수술 후에도 지속되는 통증",
  "급성 요통, 경추통으로 일상생활이 어려운 경우",
];

export default function NerveBlock() {
  return (
    <section id="nerve-block" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <div className="overflow-hidden rounded-3xl border border-border">
          <div className="relative aspect-[845/805] w-full">
            <Image
              src="/nerve-block-photo.png"
              alt="C-arm 투시영상으로 척추경, 신경근, 조영제 퍼짐을 확인하며 시행하는 신경차단술"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
            영상 유도 신경차단술
          </h2>
          <p className="mt-5 text-[1.02rem] leading-[1.85] text-ink-soft">
            C-arm 실시간 투시영상을 통해 신경과 혈관의 위치를 직접
            확인하며, 통증의 원인이 되는 부위에 정확한 약물을 주입합니다.
            정밀한 위치 확인으로 불필요한 조직 손상을 최소화합니다.
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

          <div className="mt-8 rounded-2xl bg-bg-soft p-6">
            <div className="flex items-center gap-2 text-[1.02rem] font-bold text-primary">
              <Star size={20} aria-hidden="true" />
              화이팅의 기준
            </div>
            <p className="mt-3 text-[0.98rem] leading-[1.8] text-ink-soft">
              목표는 수 mm의 공간입니다.
              <br />
              <span className="font-bold text-primary">
                주사의 끝이 정확히 목표점에 위치했느냐에 따라 치료의 효과는
                천차만별
              </span>
              입니다. 저희는 모든 중재적 시술을 C-arm 영상을 확인하며
              정확한 위치를 확인한 후에 시행합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
