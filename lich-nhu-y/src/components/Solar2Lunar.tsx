"use client";

import { CardComponent } from "@/components/CardComponent";
import { solar2Lunar } from "@lich-nhu-y/lunar";
import { useState } from "react";

type resultType = {
  date: string;
  format: string;
  is_leap: boolean;
};

const Solar2Lunar = () => {
  const [result, setResult] = useState<resultType>();
  const [value, setValue] = useState<any>();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSolar2Lunar = (solarDay: any) => {
    const res = solar2Lunar(solarDay, "DD/MM/YYYY");
    setResult(res);
  };

  return (
    <CardComponent
      title="Đổi ngày âm dương"
      className="col-span-1 max-xl:col-span-2"
    >
      <div className="px-5 py-8">
        <span className="text-sm text-[#111111] leading-[22px] font-semibold mx-auto mt-8">
          Chọn ngày dương
        </span>
        <input
          value={value}
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
          className="py-[19px] rounded-2xl w-full mt-2 border border-[#111111] mb-6 px-6"
        />
        {result && <div>Ngày âm là: {result.date}</div>}
        <button
          className="bg-[#111111] text-white w-full py-[19px] rounded-2xl font-bold text-sm"
          onClick={() => {
            // handleSolar2Lunar(value.trim());
          }}
        >
          {result ? "Chọn ngày khác" : "Chuyển đổi"}
        </button>
      </div>
    </CardComponent>
  );
};
export default Solar2Lunar;
