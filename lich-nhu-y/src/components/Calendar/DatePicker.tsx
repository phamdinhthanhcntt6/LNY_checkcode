import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Day } from "./Day";
import { MonthCaption } from "./MonthCaption";
import { Weekdays } from "./Weekdays";

export const DatePicker = () => {
  return (
    <div className="p-8 max-md:p-0">
      <DayPicker
        mode="single"
        locale={vi}
        components={{
          Day,
          Weekdays,
          MonthCaption,
        }}
        formatters={{
          formatCaption: (date, options) => {
            const formattedDate = format(date, "MMMM yyyy", options);
            return (
              formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
            );
          },
          formatWeekdayName: (date, options) => {
            const weekday = format(date, "EEE", options);
            return weekday === "CN" ? "Chủ nhật" : weekday;
          },
        }}
      />
    </div>
  );
};
export default DatePicker;
