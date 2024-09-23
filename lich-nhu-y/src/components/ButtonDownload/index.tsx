interface Props {
  className?: string;
  title?: string;
}

export const ButtonDownload = (props: Props) => {
  const { className, title } = props;

  return (
    <div
      className={`bg-[#F2F4F7] rounded-[32px] border border-[#111111] shadow-custom-shadow ${className} max-md:w-full px-[20px] max-lg:mr-0 max-lg:mt-4 p-6 w-max lg:mb-6`}
    >
      <div className="text-center flex flex-col items-center">
        <div className="uppercase text-base text-[#111111] font-extrabold mb-6">
          {title}
        </div>
        <div className="block w-full bg-black rounded-2xl">
          <button className="py-[19px] text-center w-max items-center px-24 max-lg:px-10">
            <div className="font-bold text-sm text-white leading-[18px] flex flex-row mx-auto">
              Tải ứng dụng
              <span className="uppercase ml-1">Lịch như ý</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
