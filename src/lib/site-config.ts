// 병원 기본 정보
export const siteConfig = {
  siteUrl: "https://www.fightingpain.co.kr",
  name: "화이팅통증의학과의원",
  nameEn: "Fighting! Pain Clinic",
  phone: "02-960-7585",
  phoneTel: "tel:02-960-7585",
  address: "서울시 동대문구 왕산로176",
  addressDetail: "현대자동차건물 6층",
  businessNumber: "819-98-01550",
  directorName: "임채원",
  naverBookingUrl:
    "https://m.booking.naver.com/booking/13/bizes/273304?theme=place&service-target=map-pc&entry=pll&lang=ko#",
  naverBlogUrl: "https://blog.naver.com/fightpainlim",
  naverTvUrl: "https://tv.naver.com/fightpain",
  youtubeUrl: "https://www.youtube.com/channel/UCTxjS-JuwONc5GQjYATnpDA",
  naverMapSearchUrl:
    "https://map.naver.com/p/entry/place/37774559?c=18.50,0,0,0,dh",
  hours: [
    { day: "월요일 · 목요일", time: "09:00 - 20:00" },
    { day: "화요일 · 수요일 · 금요일", time: "09:00 - 19:00" },
    { day: "점심시간", time: "13:00 - 14:00" },
    { day: "토요일 (점심시간 없음)", time: "09:00 - 14:00" },
    { day: "일요일 · 공휴일", time: "휴진" },
  ],
} as const;
