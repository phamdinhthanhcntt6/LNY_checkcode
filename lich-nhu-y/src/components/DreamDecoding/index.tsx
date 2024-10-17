"use client";

import { CardComponent } from "@/components/CardComponent/index";
import { DreamDecodingType } from "@/components/DreamDecoding/data";
import Modal from "@/components/Modal/index";
import RequestHelper from "@/utils/RequestHelper";
import { get, isEmpty } from "lodash";
import { useCallback, useState } from "react";

const LIMIT = 10;

const DreamDecoding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [dreamData, setDreamData] = useState<DreamDecodingType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [noResults, setNoResults] = useState(false);

  const fetchDreamData = useCallback(
    async (isInitialFetch: boolean) => {
      if (!keyword) return;

      setIsLoading(true);
      setNoResults(false);
      const offset = isInitialFetch ? 0 : dreamData.length;
      const res = await RequestHelper.get({
        url: `/v1/external/dream/list?keyword=${keyword}&limit=${LIMIT}&offset=${offset}`,
      });
      const newData = get(res, "data.rows", []) as DreamDecodingType[];

      if (isInitialFetch && newData.length === 0) {
        setNoResults(true);
      }

      setDreamData((prevData) =>
        isInitialFetch ? newData : [...prevData, ...newData]
      );
      setHasMoreData(newData.length === LIMIT);
      setIsLoading(false);
    },
    [keyword, dreamData.length]
  );

  const handleOpenModal = useCallback(() => {
    if (!isEmpty(keyword)) {
      setIsOpen(true);
      setDreamData([]);
      setHasMoreData(true);
      fetchDreamData(true);
    }
  }, [keyword, fetchDreamData]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setDreamData([]);
    setHasMoreData(true);
  };

  const handleLoadMore = () => {
    if (hasMoreData && !isLoading) {
      fetchDreamData(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
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
          onClick={handleOpenModal}
        >
          Giải mã
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={dreamData}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
        hasMoreData={hasMoreData}
        noResults={noResults}
      />
    </CardComponent>
  );
};

export default DreamDecoding;
