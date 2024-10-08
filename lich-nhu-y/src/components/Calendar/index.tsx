"use client";

import DatePicker from "@/components/Calendar/DatePicker";
import Quote from "@/components/Calendar/Quote";
import { CardComponent } from "@/components/CardComponent";
import { getLunarDayInfoFormatted, handleDayType, nameThu } from "@/libs/utils";
import { useCalendarStore } from "@/zustand/calendarStore";
import { get, isEmpty } from "lodash";
import { useMemo } from "react";

export const Calendar = () => {
  const daySelected = useCalendarStore((state) => state.daySelected);

  const lunarDayInfo = useMemo(
    () => getLunarDayInfoFormatted(daySelected),
    [daySelected]
  );

  const colorDayType = (day: string) => {
    return day === "NORMAL"
      ? "border-[#D9D9D9] text-[#D9D9D9]"
      : day === "GOOD"
      ? "border-[#28A521] text-[#28A521]"
      : "border-[#E83D3D] text-[#E83D3D]";
  };

  return (
    <CardComponent className="grid grid-cols-11 gap-4 mt-12 border border-[#111111] bg-white w-full max-lg:shadow-none max-lg:mt-0 max-md:p-3 max-xl:grid-cols-1 max-lg:border-none">
      <div className="text-center col-span-5 p-6 max-md:p-0 rounded-l-[32px]  lg:border-[#6E7074] xl:border-r">
        <div className="text-center w-full">
          <div className="flex flex-col px-2 justify-center max-lg:w-full">
            <div className="text-[156px] text-[#28A521] font-extrabold leading-[156px]">
              {get(lunarDayInfo, "daySolar")}
            </div>
            <div className="text-[32px] text-[#111111] leading-[48px]">
              {nameThu(get(lunarDayInfo, "dateSolar"))}
            </div>
            <div className="text-sm text-[#111111] leading-[48px] font-semibold">
              Tháng {get(lunarDayInfo, "monthSolar")}, {lunarDayInfo.yearSolar}
            </div>
            <div
              className={`border ${colorDayType(
                lunarDayInfo.dayType
              )}  p-2 mx-auto rounded-3xl font-medium text-sm px-8`}
            >
              {handleDayType(lunarDayInfo.dayType)}
            </div>
            <Quote />
          </div>
          <div className="bg-[#F2F4F7] grid grid-cols-3 w-full justify-between py-6 rounded-3xl mt-[29px] max-md:gap-2 items-center max-m:w-full">
            <div className="flex flex-col">
              <span className="text-xs text-[#111111]">Ngày</span>
              <span className="text-[32px] font-bold leading-[48px] text-[#28A521]">
                {lunarDayInfo.dayLunar}
              </span>
              <span className="text-sm text-[#111111]">
                {get(lunarDayInfo.lunarDay, "day_stem_branch")}
              </span>
            </div>
            <div className="flex flex-col border border-dashed border-t-0 border-b-0 border-[#E0E3E6]">
              <span className="text-xs text-[#111111]">Tháng</span>
              <span className="text-[32px] font-bold leading-[48px]">
                {lunarDayInfo.monthLunar}
              </span>
              <span className="text-sm text-[#111111]">
                {get(lunarDayInfo.lunarDay, "month_stem_branch")}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-[#111111]">Năm</span>
              <span className="text-[32px] font-bold leading-[48px]">
                {lunarDayInfo.yearLunar}
              </span>
              <span className="text-sm text-[#111111]">
                {get(lunarDayInfo.lunarDay, "year_stem_branch")}
              </span>
            </div>
          </div>
          <div className="mt-7">
            <span className="text-sm font-bold">Giờ Hoàng Đạo (Giờ Tốt)</span>
            <div className="text-sm font-medium mt-2 flex justify-center gap-1 line-clamp-2">
              {(() => {
                const goodHours = get(lunarDayInfo.lunarDay, "good_hours", []);
                if (!isEmpty(goodHours)) {
                  return goodHours
                    .map(
                      (item) =>
                        `${item.name} (${item.from_hour}-${item.to_hour})`
                    )
                    .join(", ");
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 w-full xl:-ml-2 max-md:">
        <DatePicker />
      </div>
    </CardComponent>
  );
};

export default Calendar;
