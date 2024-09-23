import { CardComponent } from "@/components/CardComponent";

const LunarCalendarYear = () => {
  return (
    <div>
      <div className="px-16 max-lg:p-4">
        <div className="text-[#111111] font-bold text-[32px] mt-12 max-lg:text-2xl">
          Lịch Âm Năm 2024
        </div>
        <div className="w-full mt-6 grid grid-cols-2 grid-flow-col gap-8 mb-24 max-lg:grid-cols-1 max-lg:flex-col max-lg:flex">
          <div className="flex flex-col gap-8">
            <CardComponent
              title="Lịch âm"
              className="text-center flex flex-col"
            >
              <div className="">
                <div className="text-sm text-[#111111] font-medium scrollbar overflow-y-auto h-[550px] px-[10px]">
                  <ul className="p-6">
                    <>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque dicta rem dolor, quam ducimus ut voluptate, fugit
                        sit quibusdam voluptatibus error hic eligendi, a sunt
                        dolorum nisi autem corporis aliquid. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Neque dicta rem
                        dolor, quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid.
                      </div>
                    </>
                  </ul>
                </div>
              </div>
            </CardComponent>
            <CardComponent
              title="Những ngày Khai Trương đẹp trong tháng 9 năm 2024"
              className="flex flex-col"
            >
              <div className="">
                <div className="text-sm text-[#111111] font-medium scrollbar overflow-y-auto h-[550px] px-[10px]">
                  <ul className="list-disc p-6">
                    <li>
                      Chủ Nhật, Ngày 1 tháng 9 năm 2024 (Âm lịch: 29/7) - Kim
                      Quỹ Hoàng Đạo
                    </li>
                    <>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque dicta rem dolor, quam ducimus ut voluptate, fugit
                        sit quibusdam voluptatibus error hic eligendi, a sunt
                        dolorum nisi autem corporis aliquid. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Neque dicta rem
                        dolor, quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Neque dicta rem dolor,
                        quam ducimus ut voluptate, fugit sit quibusdam
                        voluptatibus error hic eligendi, a sunt dolorum nisi
                        autem corporis aliquid.
                      </div>
                    </>
                  </ul>
                </div>
              </div>
            </CardComponent>
          </div>
          <div className="flex flex-col gap-8">
            <CardComponent title="Ngày lễ trong tháng 9" className="">
              <ul className="list-disc px-10 py-6">
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
              </ul>
            </CardComponent>
            <CardComponent
              title="Những ngày Nhập Trạch đẹp trong tháng 9 năm 2024"
              className=""
            >
              <ul className="list-disc px-10 py-6">
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
              </ul>
            </CardComponent>
            <CardComponent
              title="Những ngày Cưới Hỏi tốt trong tháng 9 năm 2024"
              className=""
            >
              <ul className="list-disc px-10 py-6">
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
              </ul>
            </CardComponent>
            <CardComponent
              title="Những ngày Xuất Hành đẹp trong tháng 9 năm 2024"
              className=""
            >
              <ul className="list-disc px-10 py-6">
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
                <li>2/9: Ngày Quốc Khánh.</li>
                <li>10/9: Ngày thành lập Mặt trận Tổ quốc Việt Nam.</li>
              </ul>
            </CardComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LunarCalendarYear;
