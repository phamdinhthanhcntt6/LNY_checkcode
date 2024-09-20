"use client";

import { CardComponent } from "@/components/CardComponent/index";
import Modal from "@/components/Modal/index";
import { useState } from "react";

const DreamDecoding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <Modal isOpen={isOpen} onClose={closeModal} />
    </CardComponent>
  );
};

export default DreamDecoding;
