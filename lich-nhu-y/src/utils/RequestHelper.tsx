class RequestHelper {
  DOMAIN = "https://be-staging.lichnhuy.vn";

  querify = (url: string, queryObject: RequestHelper) => {
    const newUrl = url;
    if (queryObject === undefined) return newUrl;
    // newUrl += `?${qs.stringify(queryObject)}`;
    return newUrl;
  };

  makeSignature = (data: any) => {
    return data;
  };

  get = async ({ url = "", data = {}, headers = {} }) => {
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
        // authorization: this.token ? this.token : this.accessToken,
        ...headers,
      },
    });
    const res = await response.json();

    if (!res || res.status === false) {
      //   await this.handleException(res);
    }
    return res;
  };
}

export default new RequestHelper();
