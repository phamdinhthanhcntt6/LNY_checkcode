"use client";

import { CardComponent } from "@/components/CardComponent/index";
import { DreamDecodingType } from "@/components/DreamDecoding/data";
import Modal from "@/components/Modal/index";
import RequestHelper from "@/utils/RequestHelper";
import { get, isEmpty } from "lodash";
import { useEffect, useState } from "react";

const DreamDecoding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keyword, setKeyWord] = useState<string>("");
  const [dreamData, setDreamData] = useState<DreamDecodingType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [fullData, setFullData] = useState(false);

  useEffect(() => {
    getDreamDecodingList(keyword);
  }, [page]);

  const openModal = () => {
    if (!isEmpty(keyword)) {
      getDreamDecodingList(keyword);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setPage(1);
    setDreamData([]);
    setFullData(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const getDreamDecodingList = async (
    keyword: string,
    limit?: number,
    offset?: number
  ) => {
    limit = limit ?? 10;
    offset = isEmpty(dreamData) ? 0 : page * 10;
    setIsLoading(true);
    const res = await RequestHelper.get({
      url: `/v1/external/dream/list?keyword=${keyword}&limit=${limit}&offset=${
        offset * page
      }`,
    });
    const data = get(res, "data.rows");
    if (isEmpty(data)) {
      setFullData(true);
    }
    setDreamData([...dreamData, ...data]);
    setIsLoading(false);
  };

  return (
    <CardComponent
      title="GIẢI MÃ GIẤC MƠ"
      className="col-span-1 max-xl:col-span-2"
    >
      <div className="px-5 py-8 text-sm font-semibold">
        <span className="text-[#111111] leading-[22px] mx-auto mt-8 text-center">
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
        handleLoadMore={() => !fullData && setPage(page + 1)}
        isLoading={isLoading}
        fullData={fullData}
      />
    </CardComponent>
  );
};

export default DreamDecoding;
