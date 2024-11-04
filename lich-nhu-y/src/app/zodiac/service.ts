import RequestHelper from "@/utils/RequestHelper";
import { DataResponse } from "./data";

export const getZodiacDetail = async (zodiacSelected: string) => {
  const res: DataResponse = await RequestHelper.get({
    url: `/v1/external/zodiac/detail?id=${zodiacSelected}`,
  });
  return res.data;
};
