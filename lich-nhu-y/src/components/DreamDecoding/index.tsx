"use client";

import { CardComponent } from "@/components/CardComponent/index";
import { DreamDecodingType } from "@/components/DreamDecoding/data";
import Modal from "@/components/Modal/index";
import RequestHelper from "@/utils/RequestHelper";
import { get, isEmpty } from "lodash";
import { useState } from "react";

const DreamDecoding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keyword, setKeyWord] = useState<string>("");
  const [dreamData, setDreamData] = useState<DreamDecodingType[]>([]);

  const openModal = () => {
    if (!isEmpty(keyword)) {
      getDreamDecodingList(keyword);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const getDreamDecodingList = async (keyword: string, offset?: number) => {
    offset = offset ?? 0;
    const res = await RequestHelper.get({
      url: `/v1/external/dream/list?keyword=${keyword}`,
    });
    const data = get(res, "data.rows");
    setDreamData(data);
  };

  return (
    <CardComponent
      title="GIẢI MÃ GIẤC MƠ"
      className="col-span-1 max-xl:col-span-2"
    >
      <div className="px-5 py-8">
        <span className="text-sm text-[#111111] leading-[22px] font-semibold mx-auto mt-8 text-center">
          Bạn mơ thấy gì? Hãy nhập nội dung giấc mơ của bạn và ấn giải mã
        </span>
        <input
          value={keyword}
          onChange={handleChange}
          placeholder="Ex: Con rắn"
          className="py-[19px] rounded-2xl w-full mt-2 border border-[#111111] mb-6 px-6"
        />
        <button
          className="bg-[#111111] text-white w-full py-[19px] rounded-2xl font-bold text-sm"
          onClick={openModal}
        >
          Giải mã
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        data={dreamData}
        keyword={keyword}
      />
    </CardComponent>
  );
};

export default DreamDecoding;
