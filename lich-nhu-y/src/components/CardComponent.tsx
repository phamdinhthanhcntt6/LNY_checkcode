import { ReactNode } from "react";
import Image from "next/image";
import { images } from "@/assets/image";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
  button?: boolean;
  titlePosition?: "center" | "left";
  onClose?: () => void;
  noBorder?: boolean;
}
export const CardComponent = (props: Props) => {
  const { children, title, className, titlePosition, onClose, noBorder } =
    props;
  return (
    <div
      className={`bg-[#F2F4F7] rounded-[32px] border border-[#111111]
          ${noBorder ?? "border-b-[6px] border-r-[6px]"} ${className}`}
    >
      {title && (
        <div className="flex flex-col bg-white rounded-t-[32px]">
          <div className="flex flex-row items-center">
            <div
              className={`${
                titlePosition === "left"
                  ? "text-base font-extrabold w-full p-4 pl-8 text-left leading-[18px]"
                  : "text-center w-full p-4 uppercase font-extrabold text-base"
              }`}
            >
              {title}
            </div>
            {/* {button && (
              <div className="flex flex-row gap-2 mr-6">
                <img src={iconArrow} className="" />
                <img src={iconArrow} className="rotate-180" />
              </div>
            )} */}
            {onClose && (
              <button onClick={onClose}>
                <Image
                  alt=""
                  src={images.close1}
                  className="w-6 h-6 mr-[15px]"
                />
              </button>
            )}
          </div>
          <div className="border border-dashed w-full flex flex-row border-[#111111]" />
        </div>
      )}
      <div className="">{children}</div>
    </div>
  );
};
