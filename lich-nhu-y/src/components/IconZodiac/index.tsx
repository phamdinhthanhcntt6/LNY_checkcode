"use client";

import { iconZodiacData } from "./iconZodiac";
import Image from "next/image";

const IconZodiac = () => {
  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar cursor-pointer">
      {iconZodiacData.map((item, index) => (
        <Image alt={`${item.id}`} src={item.image} key={index} />
      ))}
    </div>
  );
};

export default IconZodiac;
