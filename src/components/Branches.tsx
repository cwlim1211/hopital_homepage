import Image from "next/image";
import { Building2, Handshake, MapPin, Target, Users } from "lucide-react";

const PINS = [
  { label: "종각역 1번 출구 235m", num: 1, left: "30.8%", top: "27.8%" },
  { label: "청량리역 6번 출구 20m", num: 1, left: "61.4%", top: "17.4%" },
  { label: "역삼역 3번 출구 2분", num: 2, left: "57.4%", top: "72.6%" },
];

const BRANCHES = [
  {
    image: "/branch-gwanghwamun.jpg",
    alt: "광화문점 건물 전경",
    name: (
      <>
        화이팅통증의학과
        <br />
        광화문점
      </>
    ),
    addr: (
      <>
        서울특별시 종로구 종로 19
        <br />
        르메이에르종로타운 2층
      </>
    ),
    dist: "종각역 1번 출구에서 235m",
    num: 1,
  },
  {
    image: "/branch-yeoksam.jpg",
    alt: "화이팅정형외과 건물 전경",
    name: "화이팅정형외과",
    addr: (
      <>
        서울특별시 강남구 테헤란로 146
        <br />
        현익빌딩 5, 6층
      </>
    ),
    dist: "역삼역 3번 출구에서 2분",
    num: 2,
  },
  {
    image: "/branch-cheongnyangni.jpg",
    alt: "청량리점 건물 전경",
    name: (
      <>
        화이팅통증의학과
        <br />
        청량리점
      </>
    ),
    addr: (
      <>
        서울특별시 동대문구 왕산로 176
        <br />
        현대자동차 건물 6층
      </>
    ),
    dist: "청량리역 6번 출구에서 20m",
    num: 1,
  },
];

const FEATURES = [
  {
    icon: Users,
    title: "3개 지점 협진 시스템",
    desc: "지점 간 의료진 협진으로 더 정확하고 안전한 진료",
  },
  {
    icon: Target,
    title: "정밀한 영상 유도 치료",
    desc: "C-arm, 초음파 등 영상 유도 하 실질 주사치료",
  },
  {
    icon: Handshake,
    title: "과잉 없는 정직한 진료",
    desc: "꼭 필요한 치료만, 환자 중심의 진료 철학",
  },
  {
    icon: MapPin,
    title: "편리한 접근성",
    desc: "주요 지역에 위치하여 더 가까이, 더 편리하게",
  },
];

export default function Branches() {
  return (
    <section id="branches">
      <div className="bg-gradient-to-b from-primary-tint to-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-[0.85rem] font-bold tracking-[0.14em] text-primary-dark">
              ABOUT FIGHTING PAIN CLINIC
            </p>
            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-[1.4] text-ink sm:text-[2.1rem]">
              화이팅통증의학과는
              <br />
              <span className="text-primary">3개의 지점</span>이 있는 병원입니다
            </h2>
            <p className="mt-5 text-[1rem] leading-[1.8] text-ink-soft">
              서울 주요 지역에 위치한 3개 지점이
              <br />
              더 가까이에서 빠르고 정밀한 진료를 제공합니다.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.25rem] border border-border shadow-xl shadow-primary/10">
            <div className="relative aspect-[594/551] w-full">
              <Image
                src="/branch-map.jpg"
                alt="화이팅통증의학과의원 3개 지점 실제 위치 지도"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            {PINS.map((pin, i) => (
              <div
                key={i}
                style={{ left: pin.left, top: pin.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[0.7rem] font-bold text-ink shadow-lg sm:text-[0.78rem]"
              >
                <span
                  className={`mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] text-white ${
                    pin.num === 1 ? "bg-primary" : "bg-rose-500"
                  }`}
                >
                  {pin.num}
                </span>
                {pin.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.85rem] font-bold tracking-[0.14em] text-primary-dark">
            FIGHTING PAIN CLINIC
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
            언제나 환자 가까이,{" "}
            <br className="sm:hidden" />
            정직한 진료로 함께합니다
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {BRANCHES.map((b, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15"
            >
              <div className="flex h-64 items-center justify-center bg-bg-soft">
                <div className="relative h-full w-full">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 text-[1.05rem] font-extrabold text-ink">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-primary">
                    <Building2 size={15} aria-hidden="true" />
                  </span>
                  <span>{b.name}</span>
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">{b.addr}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1.5 text-[0.8rem] font-bold text-primary-dark">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] text-white ${
                      b.num === 1 ? "bg-primary" : "bg-rose-500"
                    }`}
                  >
                    {b.num}
                  </span>
                  {b.dist}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.9fr_1.5fr] lg:px-8">
          <h3 className="text-[1.2rem] font-bold leading-[1.6] text-white">
            정확한 진단, 정밀한 치료, 그리고 회복까지
            <br />
            화이팅통증의학과는 3개 지점이 함께합니다.
          </h3>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <p className="text-[0.9rem] font-bold text-white">{title}</p>
                <p className="text-[0.78rem] leading-relaxed text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
