import React from "react";

/**
 * Render the row with the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weekdays(props: JSX.IntrinsicElements["tr"]) {
  return (
    <thead className="border border-[#111111] mb-4 rounded-3xl">
      <tr className="test_1">{props.children}</tr>
    </thead>
  );
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
