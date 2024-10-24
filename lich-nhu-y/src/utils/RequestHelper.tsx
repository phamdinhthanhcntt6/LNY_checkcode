class RequestHelper {
  DOMAIN = process.env.NEXT_PUBLIC_API_URL;

  querify = (url: string, queryObject?: Record<string, unknown>): string => {
    const newUrl = url;
    if (queryObject === undefined) return newUrl;
    return newUrl;
  };

  makeSignature = (data: Record<string, unknown>): Record<string, unknown> => {
    return data;
  };

  get = async ({
    url = "",
    data = {},
    headers = {},
  }: {
    url?: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
  }) => {
    const apiUrl = this.querify(
      this.DOMAIN + url,
      !data || Object.keys(data).length === 0
        ? this.makeSignature({})
        : this.makeSignature(data)
    );
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        ...headers,
      },
    });
    const res = await response.json();
    if (!res || res.status === false) {
      // TODO: handle error
    }
    return res;
  };
}

const requestHelperInstance = new RequestHelper();

export default requestHelperInstance;
