"use client";

import { icons } from "@/assets/icon";
import { images } from "@/assets/image";
import { navItem } from "@/components/Header/navItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isVisble, setIsVisble] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisble(false);
  }, [pathname]);

  return (
    <div className="px-16 pt-8 max-lg:px-4">
      <div className="flex flex-row max-md:p-0 justify-between">
        <Link href={"/"}>
          <button className="flex flex-row">
            <Image src={images.logoLNY} alt="" className="min-h-8 min-w-40" />
          </button>
        </Link>
        <div className="flex flex-row max-lg:hidden max-lg:p-1">
          <div className="flex flex-row gap-6 max-2xl:gap-1 max-xl:gap-0 flex-1">
            {navItem.map((item) => (
              <Link
                href={`${item.path}`}
                className={`flex flex-row  rounded-full px-4 py-2  ${
                  item.path === pathname && "outline-[#111111] outline"
                }`}
                key={item.id}
              >
                <span
                  className="font-semibold text-sm text-[#111111]"
                  key={item.id}
                >
                  {item.name}
                </span>
                {item.more && (
                  <Image
                    alt=""
                    src={icons.arrowDown}
                    className="w-3 h-3 ml-[3px] mt-1"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center gap-6 ml-[37px] max-xl:hidden">
          <button className="flex flex-row">
            <Image alt="facebook" src={icons.facebook} />
            <div className="text-[#6E7074] font-medium text-sm ml-[3px] max-2xl:hidden">
              Facebook
            </div>
          </button>
          <button className="flex flex-row">
            <Image src={icons.instagram} alt="instagram" />
            <div className="text-[#6E7074] font-medium text-sm ml-[3px] max-2xl:hidden">
              Instagram
            </div>
          </button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => {
              setIsVisble(!isVisble);
            }}
          >
            <Image alt="menu" src={icons.menu} />
          </button>
        </div>
        <div
          className={`lg:hidden absolute w-full top-20 right-0 bg-[#F2F4F7] py-[22px] px-6 ${
            isVisble ? "block" : "hidden"
          }`}
        >
          {navItem.map((item, index) => (
            <>
              <Link
                href={`${item.path}`}
                className={`flex flex-row  rounded-full px-4 py-2 w-full ${
                  index < navItem.length - 1 &&
                  "border-dashed border-b border-[#DCDFE2]"
                } ${item.path === pathname && ""}`}
                key={item.id}
              >
                <div
                  className={`font-semibold text-sm w-full text-[#111111] text-center ${
                    item.path === pathname && "text-[#FD5B3A]"
                  }`}
                  key={item.id}
                >
                  {item.name}
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
