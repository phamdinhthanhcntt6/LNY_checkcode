"use client";

import { DayPicker } from "react-day-picker";
import { Weekdays } from "./Weekdays";
import { MonthCaption } from "./MonthCaption";
import { Day } from "./Day";

export const DatePicker = () => {
  return (
    <div>
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
