"use client";

import RequestHelper from "@/utils/RequestHelper";
import { get } from "lodash";
import { useLayoutEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useLayoutEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const res = await RequestHelper.get({
      url: "/v1/external/quote/random",
    });
    let data = get(res, "data.quote");
    setQuote(data);
    return data;
  };

  return (
    <div className="text-sm text-[#111111] leading-[22px] font-semibold mx-auto mt-8 w-full">
      {quote}
    </div>
  );
};

export default Quote;
