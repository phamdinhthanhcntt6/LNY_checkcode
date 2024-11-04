"use client";

import {
  DataResponse,
  IDataNumerology,
} from "@/components/IconNumerology/data";
import RequestHelper from "@/utils/RequestHelper";
import { useNumerologyStore } from "@/zustand/numerologyStore";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const IconNumerology = () => {
  const { updateNumerologySelected, numerologySelected } = useNumerologyStore();

  const { data, isLoading } = useQuery({
    queryKey: ["numerology"],
    queryFn: async () => {
      const res: DataResponse = await RequestHelper.get({
        url: "/v1/external/numerology/list?limit=13",
      });
      return res.data.rows;
    },
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar cursor-pointer">
      {data!.map((item: IDataNumerology) => (
        <div
          key={item.id}
          onClick={() => {
            updateNumerologySelected(item.id);
          }}
          className="cursor-pointer"
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              key={item.id}
              className={`w-12 h-12 ${
                item.id === numerologySelected && "shadow-inset-black"
              }`}
            ></Image>
          ) : (
            <div
              className={`bg-black text-white items-center p-10 rounded-full ${
                item.id === numerologySelected && "text-red-700"
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

export default IconNumerology;
