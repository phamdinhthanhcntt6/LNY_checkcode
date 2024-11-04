"use client";

import { DataResponse, IDataZodiac } from "@/components/IconZodiac/data";
import RequestHelper from "@/utils/RequestHelper";
import { useZodiacStore } from "@/zustand/zodiacStore";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const IconZodiac = () => {
  const { updateZodiacSelected, zodiacSelected } = useZodiacStore();

  const { data, isLoading } = useQuery({
    queryKey: ["zodiac"],
    queryFn: async () => {
      const res: DataResponse = await RequestHelper.get({
        url: "/v1/external/zodiac/list?limit=12",
      });
      return res.data.rows;
    },
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar cursor-pointer">
      {data!.map((item: IDataZodiac) => (
        <div
          key={item.id}
          onClick={() => {
            updateZodiacSelected(item.id);
          }}
          className="cursor-pointer"
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              key={item.id}
              className={`w-12 h-12 ${
                item.id === zodiacSelected && "shadow-inset-black"
              }`}
            ></Image>
          ) : (
            <div
              className={`bg-black text-white items-center p-4 rounded-full ${
                item.id === zodiacSelected && "text-red-700"
              }`}
              key={item.id}
            >
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconZodiac;
