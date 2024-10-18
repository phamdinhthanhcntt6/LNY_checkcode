"use client";

import { CardComponent } from "@/components/CardComponent";
import {
  BadHour,
  GoodHour,
  LunarDayType,
  LyThuanPhong,
  TietKhi,
} from "@/components/LunarCalendarInfor/data";
import { formatSolarDay } from "@/libs/utils";
import RequestHelper from "@/utils/RequestHelper";
import { get, isEmpty } from "lodash";
import { useEffect, useState } from "react";

const LunarCalendarInfor = () => {
  const [badHours, setBadHours] = useState<BadHour[]>([]);
  const [goodHours, setGoodHours] = useState<GoodHour[]>([]);
  const [lunarDayInfo, setLunarDayInfo] = useState<LunarDayType>();
  const [tietKhi, setTietKhi] = useState<TietKhi[]>();
  const [lythuanphong, setLythuanphong] = useState<LyThuanPhong[]>([]);

  useEffect(() => {
    getLunarCalendarInfor();
  }, []);

  const getLunarCalendarInfor = async () => {
    const res = await RequestHelper.get({
      url: `/v1/external/lunar-day/info?solar_day=${formatSolarDay()}`,
    });
    setLunarDayInfo(get(res, "data") as LunarDayType);
    setBadHours(get(res, "data.bad_hours") as BadHour[]);
    setGoodHours(get(res, "data.good_hours") as GoodHour[]);
    setTietKhi(get(res, "data.tiet_khi") as TietKhi[]);
    setLythuanphong(get(res, "data.ly_thuan_phong") as LyThuanPhong[]);
  };

  return (
    <CardComponent
      title="Xem ngày tốt xấu hôm nay "
      className="col-span-2 row-span-2 h-full flex flex-col"
    >
      <div className="px-[10px] text-sm font-medium pt-1">
        <div className="h-[550px] max-2xl:h-[600px] max-xl:h-[550px] max-md:h-[350px] overflow-y-auto px-[34px] max-md:px-4 scrollbar flex flex-col">
          <div className="flex flex-col max-md:grid max-md:grid-cols-2 pt-6">
            <div className="flex flex-col">
              {!isEmpty(goodHours) && (
                <div className="font-bold">Giờ hoàng đạo</div>
              )}
              <div className=" flex max-md:flex-col max-md:mt-2">
                {!isEmpty(goodHours) &&
                  goodHours.map((item, index) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour}h)`}
                      {index < goodHours.length - 1 && (
                        <span className="max-md:hidden">,&nbsp;&nbsp;</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col">
              {!isEmpty(badHours) && (
                <div className="font-bold">Giờ hắc đạo</div>
              )}
              <div className=" flex max-md:flex-col max-md:mt-2">
                {!isEmpty(badHours) &&
                  badHours.map((item, index) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour}h)`}
                      {index < badHours.length - 1 && (
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
            <span>{get(lunarDayInfo, "elements")}</span>
          </span>
          <br />
          <div>
            <p className="font-bold">Tuổi xung: </p>
            <ul className="list-disc pl-4">
              <li>Xung ngày: {get(lunarDayInfo, "age_conflict_day")}</li>
              <li>Xung tháng: {get(lunarDayInfo, "age_conflict_month")}</li>
            </ul>
          </div>
          <br />
          <span>
            <span className="font-bold">Sao:&nbsp;</span>
            <span>{get(lunarDayInfo, "star")}</span>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-bold">Sao tốt:&nbsp;</span>
              <span>{get(lunarDayInfo, "good_stars")}</span>
            </li>
            <li>
              <span className="font-bold">Sao xấu:&nbsp;</span>
              <span>{get(lunarDayInfo, "bad_stars")}</span>
            </li>
          </ul>
          <br />
          <span className="font-bold">Hướng xuất hành</span>
          <ul className="pl-4 list-disc">
            <li>
              <span className="font-bold">Hướng xuất hành Tài Thần:&nbsp;</span>
              <span>{get(lunarDayInfo, "huong_tai_than")}</span>
            </li>
            <li>
              <span className="font-bold">Hướng xuất hành Hỷ Thần:&nbsp;</span>
              <span>{get(lunarDayInfo, "huong_hy_than")}</span>
            </li>
            <li>
              <span className="font-bold">Hướng xuất hành Hắc Thần:&nbsp;</span>
              <span>{get(lunarDayInfo, "huong_hac_than")}</span>
            </li>
          </ul>
          <br />
          {tietKhi && (
            <span className="flex flex-row">
              <span>
                <span className="font-bold">Tiết khí: </span>
                {get(tietKhi, "name")}
              </span>
              &nbsp;&ndash;&nbsp;
              <div>{get(tietKhi, "meaning")}</div>&nbsp;&ndash;&nbsp;
              <div>
                {`(${get(tietKhi, "from_date_format")}-${get(
                  tietKhi,
                  "to_date_format"
                )})`}
              </div>
            </span>
          )}
          <br />
          <div className="flex flex-col">
            <span>
              <span className="font-bold">Trực:&nbsp;</span>
              <span>{get(lunarDayInfo, "truc")}</span>
            </span>
            <ul className="list-disc pl-4">
              <li>
                <span className="font-bold">Việc nên làm:&nbsp;</span>
                {get(lunarDayInfo, "truc_to_do")}
              </li>
              <li>
                <span className="font-bold">Việc kiêng kị:&nbsp;</span>
                {get(lunarDayInfo, "truc_not_to_do")}
              </li>
            </ul>
          </div>
          <br />
          <div className="flex flex-row">
            <span>
              <span className="font-bold">Trách nhật:&nbsp;</span>
              <span className="flex flex-row">
                {get(lunarDayInfo, "trach_nhat_name")}&ndash;
                {get(lunarDayInfo, "trach_nhat_meaning")}&ndash;
                {get(lunarDayInfo, "trach_nhat_lunar_day")}
                {`(${get(lunarDayInfo, "trach_nhat_description")})`}
              </span>
            </span>
          </div>
          <br />
          <div>
            <p className="font-bold">Giờ xuất hành theo Lý Thuần Phong</p>
            <ul className="list-disc pl-4">
              {lythuanphong &&
                lythuanphong.map((item, index) => (
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
