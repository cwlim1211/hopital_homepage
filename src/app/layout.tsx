import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

// 핵심가치 섹션의 정(正)/정(正)/정(情) 강조 글자 전용 세리프 폰트
const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-serif-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "화이팅통증의학과의원 | Fighting! Pain Clinic",
  description:
    "화이팅통증의학과의원 홈페이지. 신경차단술, 도수치료, 체외충격파치료 등 정확한 진단과 편안한 치료로 환자의 통증에 공감합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
