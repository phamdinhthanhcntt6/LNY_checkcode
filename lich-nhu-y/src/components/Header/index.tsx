"use client";

import { icons } from "@/assets/icon";
import { images } from "@/assets/image";
import { navItem } from "@/components/Header/navItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type navItem = {
  id: number;
  name: string;
  path?: string;
  children?: string[];
};

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
    setOpenDropdown(false);
  }, [pathname]);

  const isChoosen =
    "/lunar-calendar/month" === pathname || "/lunar-calendar/year" === pathname;

  const renderSocial = () => {
    return (
      <>
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
      </>
    );
  };

  const renderButtonMenu = () => {
    return (
      <div className="lg:hidden">
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <Image alt="menu" src={icons.menu} />
        </button>
      </div>
    );
  };

  const renderItemNav = (item: navItem) => {
    return (
      <Link
        onMouseEnter={() => setOpenDropdown(false)}
        href={`${item.path}`}
        className={`flex justify-center px-4 py-2 ${
          item.path === pathname && "lg:rounded-full lg:shadow-inset-black"
        }`}
        key={item.id}
      >
        <div className="flex flex-row w-full">
          <div className="font-semibold text-sm text-[#111111]" key={item.id}>
            <div
              onClick={() => {
                item.children && setOpenDropdown(!openDropdown);
              }}
              className={`${
                item.path === pathname &&
                "max-lg:text-[#FD5B3A] font-semibold text-sm"
              }`}
            >
              {item.name}
            </div>
          </div>
        </div>
      </Link>
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
        <div className={`flex max-lg:p-1`}>
          <div
            className={`flex flex-row gap-6 max-2xl:gap-1 max-xl:gap-0 flex-1 max-lg:items-center  ${
              isVisible
                ? "max-lg:absolute max-lg:flex-col items-center right-0 top-20 max-lg:w-full max-lg:bg-[#F2F4F7] max-lg:py-6 max-lg:px-4"
                : "max-lg:hidden"
            }`}
          >
            {navItem.map((item, index) =>
              item.path
                ? renderItemNav(item)
                : item.children && (
                    <button
                      onMouseEnter={() => setOpenDropdown(true)}
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className={`flex justify-center px-4 py-2 ${
                        isChoosen
                          ? "lg:rounded-full lg:shadow-inset-black"
                          : "border-none shadow-none"
                      }`}
                      key={index}
                    >
                      <div className="flex flex-row w-full">
                        <div
                          className="font-semibold text-sm text-[#111111]"
                          key={item.id}
                        >
                          <div
                            className={`${
                              item.path === pathname &&
                              "max-lg:text-[#FD5B3A] font-semibold text-sm"
                            }`}
                          >
                            <div
                              className={`flex flex-row text-sm font-semibold text-[#111111] ${
                                isChoosen && "max-lg:text-[#FD5B3A]"
                              } `}
                            >
                              <div>{item.name}</div>
                              <Image
                                alt=""
                                src={icons.arrowDown}
                                className="ml-[3px]"
                              />
                            </div>
                            <div
                              onMouseLeave={() => setOpenDropdown(false)}
                              className={`${
                                openDropdown
                                  ? "absolute top-20 lg:-ml-14 max-lg:-ml-10 flex flex-col w-40 max-lg:w-32 max-lg:top-24 bg-white rounded-3xl border px-4 border-[#111111]"
                                  : "hidden"
                              }`}
                            >
                              {item.children.map((child, index) => (
                                <Link
                                  href={child.path}
                                  className={`text-sm font-semibold text-start ${
                                    index < item.children.length - 1 &&
                                    "border-b border-[#111111] border-dashed "
                                  } ${
                                    child.path === pathname &&
                                    "text-[#FD5B3A] font-semibold text-sm"
                                  }`}
                                  key={index}
                                >
                                  <div className="py-2"> {child.name}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
            )}
          </div>
        </div>
        {renderSocial()}
        {renderButtonMenu()}
      </div>
    </div>
  );
};

export default Header;
