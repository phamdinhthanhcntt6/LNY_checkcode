"use client";

import { handleDayTypeColor } from "@/libs/utils";
import { getLunarDayInfo, solar2Lunar } from "@lich-nhu-y/lunar";
import { get } from "lodash";
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
    if (day) {
      const color = handleDayTypeColor(String(getLunarDayInfo(day)!.day_type)!);
      return color;
    }
  };

  const lunarDate = solar2Lunar(String(solarDate), ["DD/MM/YYYY"]);

  return (
    <td
      {...tdProps}
      align="left"
      className="text-lg text-[#111111] font-bold bg-[#F2F4F7] rounded-lg p-2"
    >
      <div className="flex flex-row items-center">
        <span className="text-[#111111] text-lg font-bold mr-[10px]">
          {day.date.getDate()}
        </span>
        <div
          className={`w-2 h-2 rounded-full 
            bg-[gray]
         `}
        />
      </div>
      <div className="flex flex-col items-center text-[13px] px-2">
        <div className="">
          {lunarDate?.date.substring(0, lunarDate.date.indexOf("/"))}
        </div>
        <div className="text-nowrap">
          {getLunarDayInfo(day.date.toString())?.day_stem_branch}
        </div>
      </div>
    </td>
  );
}

export type DayProps = Parameters<typeof Day>[0];
