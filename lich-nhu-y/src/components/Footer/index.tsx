import { images } from "@/assets/image";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 border-dashed w-full bg-[border-[#F2F4F7] border-[#111111] border-b border-t px-16 py-5 mt-12 max-md:grid-cols-1 max-lg:p-1">
        <div className="flex flex-col">
          <div className="text-black font-bold text-base">Lịch Như Ý Team</div>
          <ul className="list-disc pl-5 mt-4">
            <li className="text-sm font-medium text-[#111111]">
              Số 11, ngõ 71 Láng Hạ, quận Ba Đình, thành phố Hà Nội
            </li>
            <li className="text-sm font-medium text-[#111111]">
              Liên hệ hợp tác & Hỗ trợ: 
              <button className="hover:underline">lichnhuy@appota.com</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-black font-bold text-base">Menu</div>
          <ul className="list-disc pl-5 mt-4 flex flex-col gap-4">
            <li className="text-sm font-medium text-[#111111]">
              <button className="hover:underline">Giới thiệu</button>
            </li>
            <li className="text-sm font-medium text-[#111111]">
              <button className="hover:underline">Policy</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-black font-bold text-base">
            Tải ứng dụng Lịch Như Ý
          </div>
          <div className="flex flex-row gap-4 mt-4 max-lg:mb-4">
            <button>
              <Image src={images.appstore} alt="" className="w-full h-12" />
            </button>
            <button>
              <Image src={images.chplay} alt="" className="w-full h-12" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-[#F2F4F7] p-4">
        <div className="mx-auto text-[#111111] text-sm font-medium">
          © Copyright 2024 by Lich Nhu Y @ Appota
        </div>
      </div>
    </>
  );
};
export default Footer;
