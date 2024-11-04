import { icons } from "@/assets/icon";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
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
          ${noBorder ?? "shadow-custom-shadow"} ${className}`}
    >
      {
        <div className="flex flex-col bg-white rounded-t-[32px] ">
          <div className="flex flex-row items-center">
            <div
              className={`${
                titlePosition === "left"
                  ? "text-base font-extrabold w-full p-4 pl-8 text-left leading-[18px] h-[50px]"
                  : "text-center w-full p-4 uppercase font-extrabold text-base h-[50px]"
              }`}
            >
              {title}
            </div>
            {onClose && (
              <button onClick={onClose}>
                <Image alt="" src={icons.close} className="w-6 h-6 mr-[15px]" />
              </button>
            )}
          </div>
          <div className="border border-dashed w-full flex flex-row border-[#111111]" />
        </div>
      }
      <>{children}</>
    </div>
  );
};
