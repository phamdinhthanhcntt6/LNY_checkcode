"use client";

import { DayPicker } from "react-day-picker";
import { Day } from "./Day";
import { Weekdays } from "./Weekdays";
import { MonthCaption } from "./MonthCaption";

export const DatePicker = () => {
  return (
    <div className="p-6 max-md:p-0">
      <DayPicker
        mode="single"
        // locale={vi}
        components={{
          Day,
          Weekdays,
          MonthCaption,
        }}
        formatters={
          {
            // formatCaption: (date, options) => format(date, "LLLL yyyy", options),
            // formatWeekdayName: (date, options) => {
            //   const weekday = format(date, "EEE", options);
            //   return weekday === "CN" ? "Chủ nhật" : weekday;
            // },
          }
        }
      />
    </div>
  );
};
export default DatePicker;
