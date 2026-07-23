import { Fragment } from "react";

const PRICE_GROUPS: {
  category: string;
  rows: { item: string; price: string; note: string }[];
}[] = [
  {
    category: "검사료 (초음파)",
    rows: [
      { item: "일반초음파", price: "10,000원 ~ 30,000원", note: "부위 및 난이도에 따라 다름" },
      { item: "진단초음파", price: "50,000원 ~ 80,000원", note: "부위 및 난이도에 따라 다름" },
    ],
  },
  {
    category: "이학요법",
    rows: [
      {
        item: "증식치료(사지관절) - PDRN",
        price: "100,000원 ~ 200,000원",
        note: "1회, 부위별 상이 · 약제비 포함",
      },
    ],
  },
  {
    category: "처치료",
    rows: [
      {
        item: "체외충격파 치료 (ESWT)",
        price: "70,000원 ~ 140,000원",
        note: "부위별 1회, 치료시간·프로그램에 따라 다름",
      },
    ],
  },
  {
    category: "치료재료대",
    rows: [
      { item: "목보호대 (soft)", price: "5,000원", note: "1회" },
      { item: "허리보호대 (단순)", price: "5,000원", note: "1회" },
      { item: "허리보호대 (서포트)", price: "60,000원", note: "1회" },
      { item: "팔걸이", price: "7,000원", note: "1회" },
      { item: "팔꿈치보호대", price: "15,000원", note: "1회" },
      { item: "손목보호대", price: "20,000원", note: "1회" },
      { item: "손가락 개구리형 보호대", price: "15,000원", note: "1회" },
      { item: "엄지손가락 보호대", price: "25,000원", note: "1회" },
      { item: "무릎보호대", price: "70,000원", note: "1회" },
      { item: "Air Cast", price: "100,000원", note: "1회" },
      { item: "아이스팩 (소)", price: "5,000원", note: "1회" },
      { item: "아이스팩 (대)", price: "8,000원", note: "1회" },
    ],
  },
  {
    category: "약제비",
    rows: [
      { item: "뉴트리헥스", price: "20,000원", note: "1회" },
      { item: "아스코빅주 (아스코르브산) 20ml", price: "20,000원", note: "1회" },
      { item: "아스코르브산주사", price: "10,000원", note: "1회" },
      { item: "비비에스주사 (푸르설티아민염산염)", price: "20,000원", note: "1회" },
      { item: "비타모주 (덱스판테놀)", price: "10,000원", note: "1회" },
      { item: "하이코민주사 (히드록소코발라민)", price: "10,000원", note: "1회" },
      { item: "휴온스피리독신염산염주사액", price: "10,000원", note: "1회" },
      { item: "아큐판", price: "20,000원", note: "1회" },
      { item: "본마린주 (비타민D주사) 300,000IU", price: "50,000원", note: "1회" },
      { item: "비타벨라프리필드주사", price: "30,000원", note: "1회" },
      {
        item: "리포라제주",
        price: "20,000원 ~ 180,000원",
        note: "1회, 치료 범위에 따라 다름",
      },
    ],
  },
  {
    category: "제증명수수료",
    rows: [
      { item: "초진기록지", price: "1,000원", note: "1장" },
      { item: "의무기록 (1~5매)", price: "1,000원", note: "1장" },
      { item: "의무기록 (6매 이상, 장당)", price: "100원", note: "1장" },
      { item: "CD 복사", price: "5,000원", note: "1장" },
      { item: "입통원확인서", price: "1,000원", note: "1장" },
      { item: "소견서", price: "10,000원", note: "1장" },
      { item: "진단서 (일반진단서)", price: "10,000원", note: "1장" },
      { item: "사본(부본) 발급 (상해진단서 제외)", price: "1,000원", note: "1장" },
      { item: "근로능력평가용진단서", price: "10,000원", note: "1장" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold text-ink sm:text-[2.1rem]">
          비급여 진료비
        </h2>
        <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink-soft">
          국민건강보험이 적용되지 않는 비급여 진료 항목의 비용을
          안내해드립니다.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-bg-soft">
              <th scope="col" className="px-5 py-4 text-[0.95rem] font-bold text-ink">
                항목
              </th>
              <th scope="col" className="px-5 py-4 text-[0.95rem] font-bold text-ink">
                비용
              </th>
              <th scope="col" className="px-5 py-4 text-[0.95rem] font-bold text-ink">
                비고
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICE_GROUPS.map((group) => (
              <Fragment key={group.category}>
                <tr className="border-b border-border bg-primary-tint">
                  <th
                    scope="colgroup"
                    colSpan={3}
                    className="px-5 py-2.5 text-left text-[0.88rem] font-bold text-primary"
                  >
                    {group.category}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.item} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-3.5 text-[0.95rem] text-ink-soft">{row.item}</td>
                    <td className="px-5 py-3.5 text-[0.95rem] tabular-nums text-ink-soft">
                      {row.price}
                    </td>
                    <td className="px-5 py-3.5 text-[0.9rem] text-ink-soft">{row.note}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-[0.9rem] text-ink-soft">
        ※ 위 금액은 병원 사정에 따라 변동될 수 있습니다. 정확한 비용은
        전화 문의 바랍니다.
      </p>
    </section>
  );
}
