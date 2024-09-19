"use client";

import { iconZodiacData } from "../../app/zodiac/iconZodiac";
import Image from "next/image";

const IconZodiac = () => {
  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar">
      {iconZodiacData.map((item) => (
        <Image alt={`${item.id}`} src={item.image} />
      ))}
    </div>
  );
};

export default IconZodiac;
