import { getLunarDayInfo } from "@lich-nhu-y/lunar";
import { get } from "lodash";
import moment from "moment";

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

export const handleDayType = (dayType: string): string | undefined => {
  const dayTypes: { [key: string]: string } = {
    BAD: "Hắc đạo",
    GOOD: "Hoàng đạo",
    NORMAL: "Bình thường",
  };
  return dayTypes[dayType];
};

export const nameThu = (thu: string): string | undefined => {
  const daysOfWeek: { [key: string]: string } = {
    Monday: "Thứ hai",
    Tuesday: "Thứ ba",
    Wednesday: "Thứ tư",
    Thursday: "Thứ năm",
    Friday: "Thứ sáu",
    Saturday: "Thứ bảy",
    Sunday: "Chủ nhật",
  };
  return daysOfWeek[thu];
};

export const getLunarDayInfoFormatted = () => {
  const lunarDay = getLunarDayInfo(moment().format("YYYY-MM-DD"));
  const lunarDate = get(lunarDay, "lunar_date");
  const solarDate = get(lunarDay, "date");

  const dayLunar = moment(lunarDate, "DD/MM/YYYY").format("DD");
  const monthLunar = moment(lunarDate, "DD/MM/YYYY").format("MM");
  const yearLunar = moment(lunarDate, "DD/MM/YYYY").format("YYYY");

  const daySolar = moment(solarDate, "DD/MM/YYYY").format("DD");
  const monthSolar = moment(solarDate, "DD/MM/YYYY").format("MM");
  const yearSolar = moment(solarDate, "DD/MM/YYYY").format("YYYY");
  const dateSolar = moment(solarDate, "DD/MM/YYYY").format("dddd");
  const dayType = get(lunarDay, "day_type") || "";

  return {
    lunarDay,
    dayLunar,
    monthLunar,
    yearLunar,
    daySolar,
    monthSolar,
    yearSolar,
    dateSolar,
    dayType,
  };
};
