import { images } from "@/assets/image";
import Content from "@/components/Content";
import Image from "next/image";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage = () => {
  return (
    <div className="bg-white w-full max-md:p-0">
      <div className="px-16 max-lg:p-1 mt-9">
        <Content />
        <div className="text-2xl font-extrabold text-[#111111]">Bài viết</div>
        <div className="grid grid-cols-4 gap-8 mt-[35px] max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {array.map((index) => (
            <div className="flex flex-col" key={index}>
              <Image alt="" src={images.image} className="w-full" />
              <div className="text-base font-extrabold mt-8 text-[#111111] hover:underline">
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
