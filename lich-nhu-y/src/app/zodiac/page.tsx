import { iconZodiacData } from "@/app/zodiac/iconZodiac";
import { iconZodiac } from "@/assets/iconZodiac/iconZodiac";
import { images } from "@/assets/image";
import { CardComponent } from "@/components/CardComponent";
import Image from "next/image";

const Zodiac = () => {
  return (
    <div>
      <div className="px-16 max-lg:p-4">
        <div className="text-[#111111] font-bold text-[32px] mb-6 mt-12">
          Cung hoàng đạo
        </div>
        <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar">
          {iconZodiacData.map((item) => (
            <Image alt={`${item.id}`} src={item.image} />
          ))}
        </div>
        <CardComponent title="Bạch Dương" titlePosition="left" noBorder>
          <div className="p-[10px]">
            <div className="h-[542px] max-md:h-[350px] overflow-y-auto px-[34px] scrollbar pt-[37px] pb-6 max-lg:px-1">
              <div></div>
            </div>
            <div className="px-[37px] mb-[39px] max-lg:p-1">
              <div className="border h-0 w-full border-dashed border-[#111111] mb-[30px]" />
              <div className="justify-between w-full flex flex-row max-lg:flex-col">
                <div className="">
                  <div className="uppercase text-base text-[#111111] font-extrabold">
                    Người nổi tiếng cung bạch dương
                  </div>
                  <div className="mb-[38px] flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar mt-6">
                    <div className="flex flex-col items-center">
                      <Image
                        alt=""
                        src={images.avatar}
                        className="w-[66px] h-[66px]"
                      />
                      <div>Name</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        alt=""
                        src={images.avatar}
                        className="w-[66px] h-[66px]"
                      />
                      <div>Name</div>
                    </div>
                  </div>
                </div>
                <CardComponent className="px-[20px] py-4 max-lg:mr-0 max-lg:mt-4 w-max">
                  <div className="text-center flex flex-col items-center">
                    <div className="uppercase text-base text-[#111111] font-extrabold mb-6">
                      Xem cung hoàng đạo của bạn
                    </div>
                    <div className="block w-full bg-black rounded-2xl">
                      <button className="py-[19px] px-2  text-center w-max items-center">
                        <div className="font-bold text-sm text-white leading-[18px] flex flex-row mx-auto">
                          Tải ứng dụng
                          <span className="uppercase ml-1">Lịch như ý</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </CardComponent>
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default Zodiac;
