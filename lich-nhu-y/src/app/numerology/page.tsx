import { images } from "@/assets/image";
import { ButtonDownload } from "@/components/ButtonDownload";
import { CardComponent } from "@/components/CardComponent";
import IconNumerology from "@/components/IconNumerology";
import Image from "next/image";

const Numerology = () => {
  return (
    <div>
      <div className="px-16 max-lg:p-4">
        <div className="text-[#111111] font-bold text-[32px] mb-6 mt-12">
          Thần số học
        </div>
        <IconNumerology />
        <CardComponent
          title="Số 1 : Nhà Lãnh Đạo"
          noBorder
          titlePosition="left"
        >
          <div className="p-[10px]">
            <div className="h-[542px] max-md:h-[350px] overflow-y-auto px-[34px] scrollbar pt-[37px] pb-6 max-lg:px-1">
              <div></div>
            </div>
            <div className="px-[37px] mb-[39px] max-lg:p-1 w-full">
              <div className="border h-0 w-full border-dashed border-[#111111] mb-[30px]" />
              <div className="justify-between w-full flex flex-row max-lg:flex-col">
                <div>
                  <div className="uppercase text-base text-[#111111] font-extrabold">
                    Người nổi tiếng có số đường đời 1
                  </div>
                  <div className="mb-[38px] flex gap-12 overflow-x-auto flex-nowrap hide-scrollbar mt-6">
                    <div className="flex flex-col items-center">
                      <Image alt="" src={images.avatar} className="w-18 h-18" />
                      <div className="mt-2 text-[13px] text-[#111111] font-medium">
                        Name
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image alt="" src={images.avatar} className="w-18 h-18" />
                      <div className="mt-2 text-[13px] text-[#111111] font-medium">
                        Name
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonDownload
                  className="px-[20px] max-lg:mr-0 max-lg:mt-4 w-max py-6"
                  title="Xem thần số học của bạn"
                />
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default Numerology;
