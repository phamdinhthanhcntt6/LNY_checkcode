import { icons } from "@/assets/icon";
import { useEffect, useState } from "react";

const ShowAds = () => {
  useEffect(() => {
    setshowAds(true);
  }, []);
  const [showAds, setshowAds] = useState(false);
  return (
    <div
      className={`flex flex-row bg-gradient-to-r from-[#FF4222] to-[#CB0720] md:hidden px-4 py-[11px] items-center ${
        !showAds && "hidden"
      } `}
    >
      <div className="flex flex-row flex-1">
        <img src={icons.iconLogo} className="mr-2" />
        <div className="flex flex-col">
          <div className="text-[13px] text-white font-bold">Lịch Như Ý</div>
          <div className="text-xs text-white">Lịch Việt dành cho người trẻ</div>
        </div>
      </div>
      <button
        onClick={() => {
          setshowAds(false);
        }}
      >
        <img src={icons.close} className="w-6 h-6" />
      </button>
    </div>
  );
};
export default ShowAds;
