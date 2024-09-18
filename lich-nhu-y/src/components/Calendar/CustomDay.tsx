import moment from "moment";
import React from "react";
import { CalendarDay, Modifiers } from "react-day-picker";

export function Day(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
    modifiers: Modifiers;
  } & JSX.IntrinsicElements["td"]
): React.JSX.Element {
  const { day, modifiers, ...rest } = props;

  return (
    <td {...rest}>
      {/* Custom rendering logic for the day */}
      {moment(day.date).get("date")}
    </td>
  );
}

export type DayProps = Parameters<typeof Day>[0];
