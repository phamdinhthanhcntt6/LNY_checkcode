"use client";

import RequestHelper from "@/utils/RequestHelper";
import { useQuery } from "@tanstack/react-query";

const Quote = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["quote"],
    queryFn: async () => {
      const res = await RequestHelper.get({
        url: "/v1/external/quote/random",
      });
      return await res.data.quote;
    },
  });

  if (isLoading) {
    return <div>___</div>;
  }

  return (
    <div className="text-sm text-[#111111] leading-[22px] font-semibold mx-auto mt-8 w-full">
      {data}
    </div>
  );
};

export default Quote;
