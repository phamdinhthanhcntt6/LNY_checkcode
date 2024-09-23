export const navItem = [
  {
    id: 1,
    name: "Trang chủ",
    path: "/",
  },
  {
    id: 2,
    name: "Lịch âm",
    children: [
      {
        id: 5,
        name: "Lịch âm tháng",
        path: "/lunar-calendar/month",
      },
      {
        id: 6,
        name: "Lịch âm năm",
        path: "/lunar-calendar/year",
      },
    ],
  },
  {
    id: 3,
    name: "Thần số học",
    path: "/numerology",
  },
  {
    id: 4,
    name: "Cung hoàng đạo",
    path: "/zodiac",
  },
];
