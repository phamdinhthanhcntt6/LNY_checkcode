"use client";

import { CardComponent } from "@/components/CardComponent";
import { DreamDecodingType } from "@/components/DreamDecoding/data";
import RequestHelper from "@/utils/RequestHelper";
import { get, isEmpty } from "lodash";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DreamDecodingType[];
  keyword?: string;
}

const Modal = ({ isOpen, onClose, data, keyword }: ModalProps) => {
  if (!isOpen) return null;

  const [idDream, setIdDream] = useState("");
  const [detailDream, setDetailDream] = useState<DreamDecodingType>();

  const getDreamDecodingDetail = async (id: string) => {
    const res = await RequestHelper.get({
      url: `/v1/external/dream/detail?id=${id}`,
    });
    const data = get(res, "data");
    setDetailDream(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full w-full">
      <CardComponent
        title="Giải mã giấc mơ"
        onClose={onClose}
        className="bg-white w-1/2 max-xl:w-3/4 max-lg:w-4/5 max-md:w-full"
      >
        <>
          {!isEmpty(idDream) ? (
            <div className="px-[34px] py-6 flex flex-col">
              <div className="" onClick={() => setIdDream("")}>
                <button>&lt;</button>
              </div>
              {!isEmpty(detailDream) && <>Nội dung: {detailDream.content}</>}
            </div>
          ) : (
            <>
              {!isEmpty(data) ? (
                <>
                  <div className="px-[34px] py-4">
                    <div className="mb-2">Từ khóa tìm kiếm: "{keyword}"</div>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row"
                        onClick={() => {
                          setIdDream(item.id);
                          getDreamDecodingDetail(item.id);
                        }}
                      >
                        <div className="flex-1">
                          <button>{item.name}</button>
                        </div>
                        <button className="scale-150">&gt;</button>
                      </div>
                    ))}
                  </div>
                  {/* <div className="mx-auto mb-2 w-full items-center align-middle px-[34px] pb-6">
                    <button className="">Xem thêm...</button>
                  </div> */}
                </>
              ) : (
                <div className="px-[34px] py-6">Không tìm thấy kết quả nào</div>
              )}
            </>
          )}
        </>
      </CardComponent>
    </div>
  );
};

export default Modal;
