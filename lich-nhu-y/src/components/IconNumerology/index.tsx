"use client";

import { iconNumerologyData } from "./iconNumerology";
import Image from "next/image";

const IconNumerology = () => {
  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar cursor-pointer">
      {iconNumerologyData.map((item, index) => (
        <Image alt={`${item.id}`} src={item.image} key={index} />
      ))}
    </div>
  );
};

export default IconNumerology;
