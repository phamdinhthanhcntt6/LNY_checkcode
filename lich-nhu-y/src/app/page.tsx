import { images } from "@/assets/image";
import Calendar from "@/components/Calendar";
import { CardComponent } from "@/components/CardComponent";
import DreamDecoding from "@/components/DreamDecoding/index";
import LunarCalendarInfor from "@/components/LunarCalendarInfor";
import Solar2Lunar from "@/components/Solar2Lunar/index";
import Image from "next/image";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage = () => {
  return (
    <div className="bg-white w-full max-lg:p-1">
      <div className="px-16 max-lg:px-1 mt-9">
        <div className="flex flex-col max-md:px-1">
          <Image
            alt="banner"
            src={images.banner}
            className="w-full max-lg:hidden mt-12"
          />
          <Calendar />
          <div className="grid grid-cols-3 gap-8 mt-12 max-xl:grid-cols-1 p-[10px]">
            <LunarCalendarInfor />
            <Solar2Lunar />
            <DreamDecoding />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-[#111111] mt-8 max-lg:px-4">
          Bài viết
        </div>
        <div className="grid grid-cols-4 gap-8 max-sm:gap-2 mt-[35px] max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 max-lg:px-4 cursor-pointer">
          {array.map((index) => (
            <div className="flex flex-col" key={index}>
              <Image alt="" src={images.image} className="w-full" />
              <div className="text-base font-extrabold mt-8 text-[#111111] hover:underline line-clamp-2">
                Phong thủy mùa Thu 2024: Cơ hội để bùng nổ sức sáng tạo và giao
                tiếp hiệu quả
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
