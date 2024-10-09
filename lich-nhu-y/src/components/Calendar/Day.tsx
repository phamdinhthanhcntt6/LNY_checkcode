"use client";

import { getLunarDayInfoFormatted } from "@/libs/utils";
import { useCalendarStore } from "@/zustand/calendarStore";
import { get } from "lodash";
import moment from "moment";
import { useMemo } from "react";
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

  const { daySelected, updateDaySelected } = useCalendarStore();

  const lunarDayInfo = useMemo(
    () => getLunarDayInfoFormatted(moment(day.date).format("YYYY-MM-DD")),
    [day.date]
  );

  const colorDayType = () => {
    const colorType = lunarDayInfo.dayType || "";

    return colorType === "NORMAL"
      ? "bg-[#D9D9D9]"
      : colorType === "GOOD"
      ? "bg-[#28A521]"
      : "bg-[#E83D3D]";
  };

  const isSunday = (checkDate: Date): boolean => {
    const isWeekend = moment(checkDate).day();
    return isWeekend === 0;
  };

  return (
    <td {...tdProps} className="max-md:mb-2">
      {day.outside ? (
        ""
      ) : (
        <div
          onClick={() => {
            updateDaySelected(
              moment(day.date, "DD/MM/YYYY").format("YYYY-MM-DD")
            );
          }}
          className={`text-lg text-[#111111] ${
            day.outside ? "" : "bg-[#F2F4F7]"
          } p-2 max-md:p-1 rounded-lg max-md:py-0 ${
            moment(day.date, "DD/MM/YYYY").format("YYYY-MM-DD") ===
              daySelected && "shadow-inset-red"
          } ${
            modifiers.today && "bg-[#FFEAE6] shadow-inset-red"
          } cursor-pointer`}
        >
          <div className="flex flex-row items-center w-full gap-[10px] font-bold max-lg:-mt-2 ">
            <div
              className={` text-lg font-bold max-md:text-sm lg:-mt-2  ${
                isSunday(day.date) ? "text-[#FD5B3A]" : "text-[#111111]"
              }`}
            >
              {day.date.getDate()}
            </div>
            <div
              className={`w-2 h-2 rounded-full ${colorDayType()}
         `}
            />
          </div>
          <div className="flex flex-col items-center text-[13px] max-xl:p-0 max-md:-mt-2">
            <div className="max-md:text-[10px]">{lunarDayInfo.dayLunar}</div>
            <div className="text-nowrap max-md:text-[8px] -mt-3">
              {get(lunarDayInfo.lunarDay, "day_stem_branch")}
            </div>
          </div>
        </div>
      )}
    </td>
  );
}

export type DayProps = Parameters<typeof Day>[0];
