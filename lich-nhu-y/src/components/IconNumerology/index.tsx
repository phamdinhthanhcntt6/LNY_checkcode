"use client";

import { iconNumerologyData } from "./iconNumerology";
import Image from "next/image";

const IconNumerology = () => {
  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar">
      {iconNumerologyData.map((item) => (
        <Image alt={`${item.id}`} src={item.image} />
      ))}
    </div>
  );
};

export default IconNumerology;
