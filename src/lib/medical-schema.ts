import { siteConfig } from "./site-config";

// 화이팅통증의학과의원 청량리점에 대한 의료기관 구조화 데이터(JSON-LD).
// 다른 지점(광화문점/화이팅정형외과)은 전화번호·사업자등록번호를 알 수 없어 제외.
export const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: `${siteConfig.name} 청량리점`,
  alternateName: siteConfig.nameEn,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo.png`,
  image: `${siteConfig.siteUrl}/hero-photo.png`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address} ${siteConfig.addressDetail}`,
    addressLocality: "동대문구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  hasMap: siteConfig.naverMapSearchUrl,
  medicalSpecialty: ["Anesthesia", "Musculoskeletal"],
  isAcceptingNewPatients: true,
  employee: {
    "@type": "Physician",
    name: siteConfig.directorName,
    medicalSpecialty: "Anesthesia",
  },
  sameAs: [siteConfig.naverBlogUrl, siteConfig.naverTvUrl, siteConfig.youtubeUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday"],
      opens: "14:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday"],
      opens: "14:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
};
