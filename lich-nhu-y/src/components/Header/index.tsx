"use client";

import { navItem } from "@/components/Header/navItem";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { icons } from "@/assets/icon";
import { images } from "@/assets/image";

export const Header = () => {
  const [isVisble, setIsVisble] = useState(false);
  const pathname = usePathname();

  const MenuMobile = () => {
    return (
      <div className={`${!isVisble && "hidden"} lg:hidden bg-transparent`}>
        <div className="fixed w-screen h-max bg-red-400 border">
          <div className="flex flex-col gap-3">
            {navItem.map((item) => (
              <button
                className="flex flex-row px-4 py-2 active:underline"
                key={item.id}
              >
                <span
                  className="font-semibold text-sm text-[#111111]"
                  key={item.id}
                >
                  {item.name}
                </span>
                {/* {item.more && (
                  <Image
                    src={images.arrowdown}
                    className="w-3 h-3 ml-[3px] mt-1"
                    alt=""
                  />
                )} */}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
                {/* {item.more && (
                  <Image
                    alt=""
                    src={images.arrowdown}
                    className="w-3 h-3 ml-[3px] mt-1"
                  />
                )} */}
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
      </div>
      <MenuMobile />
    </div>
  );
};

export default Header;
