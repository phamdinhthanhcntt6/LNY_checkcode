"use client";

import { CardComponent } from "@/components/CardComponent";
import { DreamDecodingType } from "@/components/DreamDecoding/data";
import { isEmpty } from "lodash";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DreamDecodingType[];
  handleLoadMore?: () => void;
  isLoading?: boolean;
  fullData?: boolean;
  hasMoreData?: boolean;
  noResults?: boolean;
}

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    data,
    handleLoadMore,
    isLoading,
    hasMoreData,
    noResults,
  } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full w-full max-md:px-4">
      <CardComponent
        title="Giải mã giấc mơ"
        onClose={onClose}
        className="bg-white w-1/2 max-xl:w-3/4 max-lg:w-4/5 max-md:w-full h-1/2 pr-2 pb-24"
      >
        <div className="h-full overflow-y-auto scrollbar">
          <div className="h-full">
            {!isEmpty(data) ? (
              <div className="py-4">
                <div className="px-[34px]">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row border-b-[1px] py-2 border-dashed hover:bg-slate-100 px-2"
                    >
                      <div className="flex flex-col text-[#111111] text-sm">
                        <div className="font-bold">{item.name}</div>
                        <div className="font-medium">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {hasMoreData && (
                  <button
                    disabled={isLoading}
                    className="mx-auto w-full items-center align-middle px-[34px] text-sm"
                    onClick={handleLoadMore}
                  >
                    {isLoading ? "Đang tải..." : "Xem thêm..."}
                  </button>
                )}
              </div>
            ) : noResults ? (
              <div className="px-[34px] py-6">Không tìm thấy kết quả nào</div>
            ) : (
              <div className="px-[34px] py-6">Đang tải...</div>
            )}
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default Modal;
