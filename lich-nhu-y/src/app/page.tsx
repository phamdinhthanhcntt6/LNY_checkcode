import { images } from "@/assets/image";
import { CardComponent } from "@/components/CardComponent";
import DreamDecoding from "@/components/DreamDecoding";
import Solar2Lunar from "@/components/Solar2Lunar";
import { handleDayType, nameThu } from "@/libs/utils";
import { getLunarDayInfo } from "@lich-nhu-y/lunar";
import { get } from "lodash";
import moment from "moment";
import Image from "next/image";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage = () => {
  const lunarDay = getLunarDayInfo(moment().format("YYYY/MM/DD"));

  const dayLunar = moment(get(lunarDay, "lunar_date"), "DD/MM/YYYY").format(
    "DD"
  );
  const monthLunar = moment(get(lunarDay, "lunar_date"), "DD/MM/YYYY").format(
    "MM"
  );
  const yearLunar = moment(get(lunarDay, "lunar_date"), "DD/MM/YYYY").format(
    "YYYY"
  );
  const solarDay = getLunarDayInfo(moment().format("YYYY/MM/DD"));

  const daySolar = moment(get(solarDay, "date"), "DD/MM/YYYY").format("DD");
  const monthSolar = moment(get(solarDay, "date"), "DD/MM/YYYY").format("MM");
  const yearSolar = moment(get(solarDay, "date"), "DD/MM/YYYY").format("YYYY");

  const dateSolar = moment(get(solarDay, "date"), "DD/MM/YYYY").format("dddd");

  const dayType = get(lunarDay, "day_type");

  return (
    <div className="bg-white w-full max-md:p-0">
      <div className="px-16 max-lg:p-1 mt-9">
        <div className="flex flex-col max-md:px-1">
          <Image
            alt="banner"
            src={images.banner}
            className="w-full max-lg:hidden mt-12"
          />
          <CardComponent className="mt-12 border border-[#111111] rounded-[32px] bg-white w-full p-6 max-md:p-0 flex flex-row max-lg:flex-col max-lg:border-none max-lg:mt-0">
            <div className="items-center justify-center text-center flex flex-col w-3/5 p-6 max-md:p-0 max-md:w-full max-lg:w-full">
              <div className="flex flex-col px-2 justify-center max-lg:w-full">
                <div className="text-[156px] text-[#28A521] font-extrabold leading-[156px]">
                  {daySolar}
                </div>
                <div className="text-[32px] text-[#111111] leading-[48px]">
                  {nameThu(dateSolar)}
                </div>
                <div className="text-sm text-[#111111] leading-[48px] font-semibold">
                  Tháng {monthSolar}, {yearSolar}
                </div>
                <div className="border border-[#28A521] text-[#28A521] w-max p-2 mx-auto rounded-3xl font-medium text-sm px-8">
                  {handleDayType(dayType)}
                </div>
                <div className="text-sm text-[#111111] leading-[22px] font-semibold mx-auto mt-8 w-full">
                  “Chẳng sao cả nếu bạn cố, cố, và cố nữa, nhưng vẫn thất bại.
                  Nhưng thật tệ hại nếu bạn cố rồi thất bại, và không muốn cố
                  lần nữa.”
                </div>
              </div>
              <div className="bg-[#F2F4F7] grid grid-cols-3 w-full justify-between py-6 rounded-3xl mt-[29px] max-md:gap-2 items-center max-m:w-full">
                <div className="flex flex-col">
                  <span className="text-xs text-[#111111]">Ngày</span>
                  <span className="text-[32px] font-bold leading-[48px] text-[#28A521]">
                    {dayLunar}
                  </span>
                  <span className="text-sm text-[#111111]">
                    {get(lunarDay, "day_stem_branch")}
                  </span>
                </div>
                <div className="flex flex-col border border-dashed border-t-0 border-b-0 border-[#E0E3E6]">
                  <span className="text-xs text-[#111111]">Tháng</span>
                  <span className="text-[32px] font-bold leading-[48px]">
                    {monthLunar}
                  </span>
                  <span className="text-sm text-[#111111]">
                    {lunarDay?.month_stem_branch}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-[#111111]">Năm</span>
                  <span className="text-[32px] font-bold leading-[48px]">
                    {yearLunar}
                  </span>
                  <span className="text-sm text-[#111111]">
                    {lunarDay?.year_stem_branch}
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-7">
                <span className="text-sm font-bold">
                  Giờ Hoàng Đạo (Giờ Tốt)
                </span>
                <div className="text-sm font-medium mt-2 gap-1 flex line-clamp-2 max-lg:grid max-lg:grid-cols-3">
                  {lunarDay?.good_hours.map((item, index) => (
                    <span key={index} className="flex">
                      {`${item.name} (${item.from_hour}-${item.to_hour})`}
                      <div className="max-lg:hidden">
                        {index !== lunarDay?.good_hours.length - 1 && `,`}
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardComponent>
          <div className="grid grid-cols-3 gap-8 mt-12 max-xl:grid-cols-1 p-[10px]">
            <CardComponent
              title="Xem ngày tốt xấu hôm nay "
              className="col-span-2 row-span-2 h-full  flex flex-col"
            >
              <div className="text-base py-6 p-[10px]">
                <div className="h-[550px] max-md:h-[350px] overflow-y-auto px-[34px] scrollbar">
                  <div className="text-sm font-medium mt-2">
                    Giờ tốt hôm nay:
                  </div>
                </div>
              </div>
            </CardComponent>
            <Solar2Lunar />
            <DreamDecoding />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-[#111111]">Bài viết</div>
        <div className="grid grid-cols-4 gap-8 mt-[35px] max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {array.map((index) => (
            <div className="flex flex-col" key={index}>
              <Image alt="" src={images.image} className="w-full" />
              <div className="text-base font-extrabold mt-8 text-[#111111] hover:underline">
                Phong thủy mùa Thu 2024: Cơ hội để bùng nổ sức sáng tạo và giao
                tiếp hiệu quả
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
