import { vi } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Day } from "./CustomDay";
import { Weekdays } from "./Weekdays";
import { format } from "date-fns";

export const DatePicker = () => {
  return (
    <div>
      <DayPicker
        mode="single"
        locale={vi}
        components={{
          Day,
          Weekdays,
        }}
        formatters={{
          formatCaption: (date, options) => format(date, "LLLL yyyy", options),
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
