import type { Metadata } from "next";
import Services from "@/components/Services";
import NerveBlock from "@/components/NerveBlock";
import UltrasoundInjection from "@/components/UltrasoundInjection";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "진료안내 | 화이팅통증의학과의원",
  description:
    "화이팅통증의학과의원 진료과목 안내. 영상 유도 신경차단술, 초음파 유도 주사치료, 프롤로치료, 체외충격파치료, 도수치료·통증재활운동 및 비급여 진료비 안내.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <NerveBlock />
      <UltrasoundInjection />
      <Pricing />
    </main>
  );
}
