const VALUES = [
  {
    num: "PRECISION",
    name: "정확",
    tagline: "정확한 진단, 정확한 위치, 정확한 효과",
    desc: "환자분의 이야기를 충분히 듣고 정밀 검사로 통증의 원인을 정확히 찾아냅니다. 찾아낸 원인에 맞춰 정확한 위치에 치료하여 실질적인 회복을 돕습니다.",
  },
  {
    num: "HONESTY",
    name: "정직",
    tagline: "과잉 없이, 꼭 필요한 진료만",
    desc: "환자분의 상황에 꼭 필요한 검사와 치료만 정직하게 권합니다. 있는 그대로 설명하고, 필요한 부분만 정직하게 안내하는 것을 원칙으로 합니다.",
  },
  {
    num: "SINCERITY",
    name: "정성",
    tagline: "공감으로 시작해, 이해로 마무리하는 설명",
    desc: "환자분의 마음까지 헤아리는 공감을 바탕으로, 정성을 담아 상태를 설명해 드립니다. 스스로 자신의 몸을 이해하실 수 있도록 끝까지 함께합니다.",
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.14em] text-primary-dark">
          <span className="h-px w-5 bg-primary" aria-hidden="true" />
          CORE VALUE
          <span className="h-px w-5 bg-primary" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-[1.35] text-ink sm:text-[2.1rem]">
          세 가지{" "}
          <span className="font-[family-name:var(--font-serif-kr)] text-primary">정</span>
          의 약속
        </h2>
        <p className="mt-4 text-[1rem] leading-[1.75] text-ink-soft">
          <span className="font-semibold text-ink">정확</span>한 진단,{" "}
          <span className="font-semibold text-ink">정직</span>한 진료,{" "}
          <span className="font-semibold text-ink">정성</span> 어린 설명 —
          <br className="hidden sm:block" />
          화이팅통증의학과의원이 환자분과 지키는 세 가지 원칙입니다.
        </p>
      </div>

      <div className="mt-12 grid gap-7 text-left sm:grid-cols-3">
        {VALUES.map(({ num, name, tagline, desc }) => (
          <div
            key={num}
            className="group relative overflow-hidden rounded-[1.25rem] border border-border bg-white p-8 pt-11 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15"
          >
            <p className="relative text-[0.75rem] font-bold tracking-[0.18em] text-primary-dark">
              {num}
            </p>
            <h3 className="relative mt-4 text-[1.6rem] font-extrabold text-ink">
              <span className="font-[family-name:var(--font-serif-kr)] text-primary">정</span>
              {name.slice(1)}
            </h3>
            <p className="relative mt-1.5 text-[0.9rem] font-semibold text-primary-dark">
              {tagline}
            </p>
            <div className="relative my-5 h-[3px] w-9 rounded-full bg-primary" aria-hidden="true" />
            <p className="relative text-[0.95rem] leading-[1.75] text-ink-soft">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
