"use client";

import { useCalendarStore } from "@/zustand/calendarStore";
import { getLunarDayInfo, solar2Lunar } from "@lich-nhu-y/lunar";
// import { getLunarDayInfo, solar2Lunar } from "@lich-nhu-y/lunar";
import moment from "moment";
import { CalendarDay, Modifiers } from "react-day-picker";
/**
 * Render the gridcell of a day in the calendar and handle the interaction and
 * the focus with they day.
 *
 * If you need to just change the content of the day cell, consider swapping the
 * `DayDate` component instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Day(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
    modifiers: Modifiers;
  } & JSX.IntrinsicElements["td"]
) {
  const { day, modifiers, ...tdProps } = props;

  const solarDate = `${day.date.getDate()}/${
    day.date.getMonth() + 1
  }/${day.date.getFullYear()}`;

  const colorDayType = (day: string) => {
    const colorType = String(getLunarDayInfo(day)!.day_type)!;
    return colorType === "NORMAL"
      ? "bg-[#D9D9D9]"
      : colorType === "GOOD"
      ? "bg-[#28A521]"
      : "bg-[#E83D3D]";
  };

  function isSunday(ngay: string): boolean {
    const ngayChuan = moment(ngay, "DD/MM/YYYY");
    const thu = ngayChuan.format("dddd");
    return thu === "Sunday";
  }

  const lunarDate = solar2Lunar(String(solarDate), ["DD/MM/YYYY"]);

  const { daySelected, updateDaySelected } = useCalendarStore();

  return (
    <td {...tdProps}>
      {day.outside ? (
        ""
      ) : (
        <div
          onClick={() => {
            updateDaySelected(
              moment(day.date, "DD/MM/YYYY").format("YYYY-MM-DD")
            );
          }}
          className={`text-lg text-[#111111] font-bold ${
            day.outside ? "" : "bg-[#F2F4F7]"
          } p-2 max-md:p-1 rounded-lg max-md:py-0 ${
            moment(day.date, "DD/MM/YYYY").format("YYYY-MM-DD") ===
              daySelected && "shadow-inset-red bg-[#FFEAE6]"
          } `}
        >
          <div className="flex flex-row items-center w-full gap-[10px]">
            <div
              className={` text-lg font-bold  max-md:text-sm ${
                isSunday(solarDate) ? "text-[#FD5B3A]" : "text-[#111111]"
              }`}
            >
              {day.date.getDate()}
            </div>
            <div
              className={`w-2 h-2 rounded-full ${colorDayType(
                day.date.toString()
              )}
         `}
            />
          </div>
          <div className="flex flex-col items-center text-[13px] max-xl:p-0">
            <div className="max-md:text-[10px]">
              {lunarDate?.date.substring(0, lunarDate.date.indexOf("/"))}
            </div>
            <div className="text-nowrap max-md:text-[9px]">
              {getLunarDayInfo(day.date.toString())?.day_stem_branch}
            </div>
          </div>
        </div>
      )}
    </td>
  );
}

export type DayProps = Parameters<typeof Day>[0];
