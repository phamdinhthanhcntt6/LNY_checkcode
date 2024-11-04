"use client";

import { getNumerologyDetail } from "@/app/numerology/service";
import { ButtonDownload } from "@/components/ButtonDownload";
import { CardComponent } from "@/components/CardComponent";
import IconNumerology from "@/components/IconNumerology";
import { useNumerologyStore } from "@/zustand/numerologyStore";
import { useQuery } from "@tanstack/react-query";
import { get } from "lodash";
import Image from "next/image";

interface People {
  id: string;
  name: string;
  avatar: string;
}

const Numerology = () => {
  const { numerologySelected } = useNumerologyStore();

  const { data } = useQuery({
    queryKey: ["numerology-detail", numerologySelected],
    queryFn: () => getNumerologyDetail(numerologySelected),
    enabled: !!numerologySelected,
  });

  return (
    <div>
      <div className="px-16 max-lg:p-4">
        <div className="text-[#111111] font-bold text-[32px] mb-6 mt-12">
          Thần số học {get(data, "name")}
        </div>
        <IconNumerology />
        <CardComponent
          title={`${get(data, "title") ? `Số ${get(data, "title")}:` : ""}`}
          noBorder
          titlePosition="left"
        >
          <div className="p-[10px]">
            <div className="h-[542px] max-md:h-[350px] overflow-y-auto px-[34px] scrollbar pt-[37px] pb-6 max-lg:px-1">
              <div className="text-sm">{get(data, "content")}</div>
            </div>
            <div className="px-[37px] mb-[39px] max-lg:p-1 w-full">
              <div className="border h-0 w-full border-dashed border-[#111111] mb-[30px]" />
              <div className="justify-between w-full flex flex-row max-lg:flex-col">
                <div className="w-full">
                  <div className="uppercase text-base text-[#111111] font-extrabold">
                    Người nổi tiếng có số đường đời {get(data, "title")}
                  </div>
                  {data?.numerology_people && (
                    <div className="mb-[38px] flex gap-12 max-md:gap-4 overflow-x-auto flex-nowrap hide-scrollbar mt-6">
                      {data?.numerology_people.map(
                        (item: People, index: number) => (
                          <>
                            {index <= 2 && (
                              <div className="flex flex-col items-center">
                                <Image
                                  width={72}
                                  height={72}
                                  quality={25}
                                  alt=""
                                  src={item.avatar}
                                  className="rounded-full w-[72px] h-[72px]"
                                  object-fit="cover"
                                />
                                <div className="mt-2 text-[13px] text-[#111111] font-medium">
                                  {item.name ?? ""}
                                </div>
                              </div>
                            )}
                          </>
                        )
                      )}
                      <div className="pb-2">
                        <div className="w-[72px] text-center h-[72px] p-5 max-md:p-2 bg-white rounded-full text-[20px] text-[#111111] font-medium border border-[#111111] shadow-custom-shadow">
                          +{data?.numerology_people.length - 3}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <ButtonDownload title="Xem thần số học của bạn" />
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default Numerology;
