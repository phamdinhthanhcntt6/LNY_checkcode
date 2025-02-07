"use client";
import { CalendarMonth } from "react-day-picker";
/**
 * Render the caption of a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthCaption(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & JSX.IntrinsicElements["div"]
) {
  const { ...divProps } = props;
  
  return (
    <div className="flex flex-row justify-between mb-4">
      <div {...divProps} className="text-lg font-bold text-[#111111]"></div>
    </div>
  );
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];
