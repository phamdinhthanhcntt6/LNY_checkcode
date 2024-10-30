import { images } from "@/assets/image";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 border-dashed w-full bg-[border-[#F2F4F7] border-[#111111] border-b border-t px-16 py-5 mt-12 max-md:grid-cols-1 max-lg:p-4">
        <div className="flex flex-col max-lg:mt-4">
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
        <div className="flex flex-col max-lg:mt-4">
          <div className="text-black font-bold text-base">Menu</div>
          <ul className="list-disc pl-5 mt-4 flex flex-col lg:gap-4">
            <li className="text-sm font-medium text-[#111111]">
              <button className="hover:underline">Giới thiệu</button>
            </li>
            <li className="text-sm font-medium text-[#111111]">
              <button className="hover:underline">Policy</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-lg:mt-4">
          <div className="text-black font-bold text-base">
            Tải ứng dụng Lịch Như Ý
          </div>
          <div className="flex flex-row gap-4 mt-4 max-lg:mb-4">
            <Link
              href={
                "https://apps.apple.com/vn/app/l%E1%BB%8Bch-nh%C6%B0-%C3%BD-v%E1%BA%A1n-ni%C3%AAn-2024/id797395252"
              }
            >
              <Image src={images.appstore} alt="" className="w-full h-12" />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.lichnhuy&hl=vi&pli=1"
              }
            >
              <Image src={images.chplay} alt="" className="w-full h-12" />
            </Link>
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
