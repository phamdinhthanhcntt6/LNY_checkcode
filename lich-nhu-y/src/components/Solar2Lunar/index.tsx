"use client";

import { icons } from "@/assets/icon";
import { CardComponent } from "@/components/CardComponent";
import { solar2Lunar } from "@lich-nhu-y/lunar";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Solar2Lunar = () => {
  const [value, setValue] = useState<string | undefined>("");
  const [result, setResult] = useState<string | undefined>("");

  const handleChange = (date: Date | null) => {
    const day = date!.getDate();
    const month = date!.getMonth() + 1;
    const year = date!.getFullYear();
    setValue(`${day}/${month}/${year}`);
  };

  const handleSolar2Lunar = (date: string | undefined) => {
    const lunarDate = solar2Lunar(date!, ["DD/MM/YYYY"]);
    lunarDate && console.log(lunarDate?.format);
    setResult(lunarDate?.date);
  };

  return (
    <CardComponent
      title="Đổi ngày âm dương"
      className="col-span-1 max-xl:col-span-2"
    >
      <div className="px-5 py-8 flex flex-col">
        <span className="text-sm text-[#111111] leading-[22px] font-semibold mb-2">
          Chọn ngày dương
        </span>
        <div className="flex flex-row xl:flex-col 2xl:flex-row items-center">
          <DatePicker
            disabled={result ? true : false}
            className="bg-white"
            value={result ? `Dương: ${value}` : `${value}`}
            onSelect={(date) => {
              date && handleChange(date);
            }}
          />
          <Image
            src={icons.arrow}
            alt=""
            className={`mx-2 md:-mt-4  max-2xl:pt-4 max-2xl:pb-3 max-xl:py-0 ${
              !result && "hidden"
            }
              max-md:rotate-90 xl:rotate-90 2xl:rotate-0`}
          />
          <input
            value={`Âm: ${result}`}
            className={`py-[19px] rounded-2xl w-full font-bold border border-[#111111] mb-6 px-6 max-md:mt-6 ${
              !result && "hidden"
            }`}
          />
        </div>
        <button
          className="bg-[#111111] text-white w-full py-[19px] rounded-2xl font-bold text-sm"
          onClick={() => {
            value && !result ? handleSolar2Lunar(value) : setResult("");
          }}
        >
          {!result ? "Chuyển đổi" : "Chọn ngày khác"}
        </button>
      </div>
    </CardComponent>
  );
};

export default Solar2Lunar;
