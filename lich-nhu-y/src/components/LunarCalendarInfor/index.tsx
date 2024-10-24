"use client";

import { CardComponent } from "@/components/CardComponent";
import {
  BadHour,
  DataResponse,
  GoodHour,
  LunarDayType,
  LyThuanPhong,
} from "@/components/LunarCalendarInfor/data";
import { formatSolarDay } from "@/libs/utils";
import RequestHelper from "@/utils/RequestHelper";
import { useQuery } from "@tanstack/react-query";

const LunarCalendarInfor = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["lunarDayInfo"],
    queryFn: async () => {
      const response: DataResponse<LunarDayType> = await RequestHelper.get({
        url: `/v1/external/lunar-day/info?solar_day=${formatSolarDay()}`,
      });
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CardComponent
      title="Xem ngày tốt xấu hôm nay "
      className="col-span-2 row-span-2 h-full flex flex-col"
    >
      <div className="px-[10px] text-sm font-medium pt-1">
        <div className="h-[550px] max-2xl:h-[600px] max-xl:h-[550px] max-md:h-[350px] overflow-y-auto px-[34px] max-md:px-4 scrollbar flex flex-col pb-6">
          <div className="flex flex-col max-md:grid max-md:grid-cols-2 pt-6">
            <div className="flex flex-col">
              {data?.good_hours && (
                <div className="font-bold">Giờ hoàng đạo</div>
              )}
              <div className=" flex max-md:flex-col max-md:mt-2">
                {data?.good_hours &&
                  data.good_hours.map((item: GoodHour, index: number) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour}h)`}
                      {index < data.good_hours.length - 1 && (
                        <span className="max-md:hidden">,&nbsp;&nbsp;</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col">
              {data?.bad_hours && <div className="font-bold">Giờ hắc đạo</div>}
              <div className=" flex max-md:flex-col max-md:mt-2">
                {data?.bad_hours &&
                  data.bad_hours.map((item: BadHour, index: number) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour}h)`}
                      {index < data.bad_hours.length - 1 && (
                        <span className="max-md:hidden">,&nbsp;&nbsp;</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <br />
          <span>
            <span className="font-bold">Hành:&nbsp;</span>
            <span>{data?.elements}</span>
          </span>
          <br />
          <div>
            <p className="font-bold">Tuổi xung: </p>
            <ul className="list-disc pl-4">
              <li>Xung ngày: {data?.age_conflict_day}</li>
              <li>Xung tháng: {data?.age_conflict_month}</li>
            </ul>
          </div>
          <br />
          <span>
            <span className="font-bold">Sao:&nbsp;</span>
            <span>{data?.star}</span>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-bold">Sao tốt:&nbsp;</span>
              <span>{data?.good_stars}</span>
            </li>
            <li>
              <span className="font-bold">Sao xấu:&nbsp;</span>
              <span>{data?.bad_stars}</span>
            </li>
          </ul>
          <br />
          <span className="font-bold">Hướng xuất hành</span>
          <ul className="pl-4 list-disc">
            <li>
              <span className="font-bold">Hướng xuất hành Tài Thần:&nbsp;</span>
              <span>{data?.huong_tai_than}</span>
            </li>
            <li>
              <span className="font-bold">Hướng xuất hành Hỷ Thần:&nbsp;</span>
              <span>{data?.huong_hy_than}</span>
            </li>
            <li>
              <span className="font-bold">Hướng xuất hành Hắc Thần:&nbsp;</span>
              <span>{data?.huong_hac_than}</span>
            </li>
          </ul>
          <br />
          {data?.tiet_khi && (
            <span className="flex flex-row">
              <span>
                <span className="font-bold">Tiết khí: </span>
                {data?.tiet_khi.name}
              </span>
              &nbsp;&ndash;&nbsp;
              <div>{data?.tiet_khi.meaning}</div>&nbsp;&ndash;&nbsp;
              <div>
                {`(${data?.tiet_khi.from_date_format}-${data?.tiet_khi.to_date_format})`}
              </div>
            </span>
          )}
          <br />
          <div className="flex flex-col">
            <span>
              <span className="font-bold">Trực:&nbsp;</span>
              <span>{data?.truc}</span>
            </span>
            <ul className="list-disc pl-4">
              <li>
                <span className="font-bold">Việc nên làm:&nbsp;</span>
                {data?.truc_to_do}
              </li>
              <li>
                <span className="font-bold">Việc kiêng kị:&nbsp;</span>
                {data?.truc_not_to_do}
              </li>
            </ul>
          </div>
          <br />
          <div className="flex flex-row">
            <span>
              <span className="font-bold">Trách nhật:&nbsp;</span>
              <span className="flex flex-row">
                {data?.trach_nhat_name}&ndash;
                {data?.trach_nhat_meaning}&ndash;
                {data?.trach_nhat_lunar_day}
                {`(${data?.trach_nhat_description})`}
              </span>
            </span>
          </div>
          <br />
          <div>
            <p className="font-bold">Giờ xuất hành theo Lý Thuần Phong</p>
            <ul className="list-disc pl-4">
              {data?.ly_thuan_phong &&
                data.ly_thuan_phong.map((item: LyThuanPhong, index: number) => (
                  <li key={index}>
                    <span className="font-bold">
                      {item.time_start}:&nbsp;{item.name}
                    </span>
                    <p>{item.content}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </CardComponent>
  );
};

export default LunarCalendarInfor;
