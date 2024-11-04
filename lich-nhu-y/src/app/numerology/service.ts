import RequestHelper from "@/utils/RequestHelper";
import { DataResponse } from "./data";

export const getNumerologyDetail = async (numerologySelected: string) => {
  const res: DataResponse = await RequestHelper.get({
    url: `/v1/external/numerology/detail?id=${numerologySelected}`,
  });
  return res.data;
};
