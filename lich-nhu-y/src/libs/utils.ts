export function formatNumber(n: number): string {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const handleDayType = (dayType: any) => {
  switch (dayType) {
    case "BAD":
      return "Hắc đạo";
    case "GOOD":
      return "Hoàng đạo";
    case "NORMAL":
      return "Bình thường";
    default:
      break;
  }
};

export const nameThu = (thu: any) => {
  switch (thu) {
    case "Monday":
      return "Thứ hai";
    case "Tuesday":
      return "Thứ ba";
    case "Wednesday":
      return "Thứ tư";
    case "Thursday":
      return "Thứ năm";
    case "Friday":
      return "Thứ sáu";
    case "Saturday":
      return "Thứ bảy";
    case "Sunday":
      return "Chủ nhật";
    default:
      break;
  }
};
