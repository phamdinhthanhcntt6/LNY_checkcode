"use client";

import { CardComponent } from "@/components/CardComponent";
import {
  BadHour,
  GoodHour,
  LunarDayType,
  StarInfo,
  TietKhi,
} from "@/components/LunarCalendarInfor/data";
import { formatSolarDay } from "@/libs/utils";
import RequestHelper from "@/utils/RequestHelper";
import { get } from "lodash";
import { useEffect, useState } from "react";

const LunarCalendarInfor = () => {
  const [badHours, setBadHours] = useState<BadHour[]>([]);
  const [goodHours, setGoodHours] = useState<GoodHour[]>([]);
  const [lunarDayInfo, setLunarDayInfo] = useState<LunarDayType>();
  const [star_infor, setStar_infor] = useState<StarInfo[]>();
  const [tietKhi, setTietKhi] = useState<TietKhi[]>();

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
    setStar_infor(get(res, "data.star_info") as StarInfo[]);
    setTietKhi(get(res, "data.tiet_khi") as TietKhi[]);
  };

  return (
    <CardComponent
      title="Xem ngày tốt xấu hôm nay "
      className="col-span-2 row-span-2 h-full flex flex-col"
    >
      <div className=" py-6 p-[10px] text-sm font-medium">
        <div className="h-[550px] max-md:h-[350px] overflow-y-auto px-[34px] max-md:px-4 scrollbar">
          <div className="flex flex-col max-md:grid max-md:grid-cols-2">
            <div className="flex flex-col">
              <div>Giờ hoàng đạo</div>
              <div className=" flex max-md:flex-col max-md:mt-2">
                {goodHours &&
                  goodHours.map((item, index) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour})`}
                      {index < goodHours.length - 1 && (
                        <span className="max-md:hidden">;&nbsp;</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div>Giờ hắc đạo</div>
              <div className=" flex max-md:flex-col max-md:mt-2">
                {badHours &&
                  badHours.map((item, index) => (
                    <div key={index}>
                      {`${item.name} (${item.from_hour}-${item.to_hour})`}
                      {index < badHours.length - 1 && (
                        <span className="max-md:hidden">;&nbsp;</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {lunarDayInfo && (
            <div className="flex flex-col">
              <div>{get(lunarDayInfo, "trach_nhat_name")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "trach_nhat_lunar_day")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "trach_nhat_meaning")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "trach_nhat_description")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "truc")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "truc_to_do")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "truc_not_to_do")}</div>
              <div>-&nbsp;{get(lunarDayInfo, "star")}</div>
            </div>
          )}
          {star_infor && (
            <div className="flex flex-col">
              <div>{get(star_infor, "name")}</div>
              <div>-&nbsp;{get(star_infor, "good_bad")}</div>
              <div>-&nbsp;{get(star_infor, "direction")}</div>
              <div>-&nbsp;{get(star_infor, "star")}</div>
              <div>-&nbsp;{get(star_infor, "star_content")}</div>
              <div>-&nbsp;{get(star_infor, "five_elements")}</div>
              <div>-&nbsp;{get(star_infor, "should_do")}</div>
              <div>-&nbsp;{get(star_infor, "should_do_not")}</div>
              <div>-&nbsp;{get(star_infor, "exception")}</div>
              <pre className="text-sm mx-auto mt-2">
                {get(star_infor, "poem")}
              </pre>
            </div>
          )}
          {tietKhi && (
            <div className="flex flex-col">
              <div>{get(tietKhi, "name")}</div>
              <div>-&nbsp;{get(tietKhi, "meaning")}</div>
              <div>
                -&nbsp;
                {`${get(tietKhi, "from_date_format")}-${get(
                  tietKhi,
                  "to_date_format"
                )}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardComponent>
  );
};
export default LunarCalendarInfor;
