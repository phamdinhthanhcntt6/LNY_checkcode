"use client";

import { icons } from "@/assets/icon";
import { CardComponent } from "@/components/CardComponent";
import { solar2Lunar } from "@lich-nhu-y/lunar";
import { useState } from "react";
import Image from "next/image";

type resultType = {
  date: string;
  format: string;
  is_leap: boolean;
};

const Solar2Lunar = () => {
  const [result, setResult] = useState<resultType>();
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSolar2Lunar = (solarDay: number | string) => {
    const res = solar2Lunar(String(solarDay), ["DD/MM/YYYY", "YYYY/MM/DD"]);
    setResult(res);
  };

  return (
    <CardComponent
      title="Đổi ngày âm dương"
      className="col-span-1 max-xl:col-span-2"
    >
      <div className={`px-5 py-8 flex flex-col`}>
        <span className="text-sm text-[#111111] leading-[22px] font-semibold mt-8">
          {result ? "Kết quả chuyển đổi" : " Chọn ngày dương"}
        </span>
        <div
          className={`flex ${
            result && "flex-row max-md:flex-col"
          } items-center gap-[14px] max-md:gap-0`}
        >
          <input
            type="date"
            disabled={result ? true : false}
            // value={!result ? `Duong: ${value}` : ""}
            value={value}
            onChange={handleChange}
            placeholder="dd/mm/yyyy"
            className={`py-[19px] rounded-2xl mt-2 border max-md:w-full border-[#111111] mb-6 px-6 text-sm text-[#111111] font-bold flex-1 ${
              result ? "w-max" : "w-full"
            }`}
            name="result"
          />

          {/* <input
            type="date"
            // disabled={result ? true : false}
            value={result ? `Duong: ${value}` : ""}
            placeholder="dd/mm/yyyy"
            onChange={handleChange}
            className={`py-[19px] rounded-2xl mt-2 border border-[#111111] mb-6 px-6  w-2/5 text-sm text-[#111111] font-bold flex-1 ${
              result ?? "hidden"
            }`}
            name="am1"
          /> */}

          <Image
            src={icons.arrow}
            alt="arrow"
            className={`${result ?? "hidden"} mb-3 max-md:rotate-90 h-2`}
          />
          <input
            disabled
            value={result ? `Âm: ${result.date}` : ""}
            placeholder="dd/mm/yyyy"
            className={`py-[19px] rounded-2xl mt-2 border border-[#111111] mb-6 px-6 max-md:w-full w-2/5 text-sm text-[#111111] font-bold flex-1 ${
              result ?? "hidden"
            }`}
            name="am"
          />
        </div>
        <button
          className="bg-[#111111] text-white w-full py-[19px] rounded-2xl font-bold text-sm"
          onClick={() => {
            value &&
              (!result
                ? handleSolar2Lunar(value!.trim())
                : setResult(undefined));
          }}
        >
          {result ? "Chọn ngày khác" : "Chuyển đổi"}
        </button>
      </div>
    </CardComponent>
  );
};
export default Solar2Lunar;
