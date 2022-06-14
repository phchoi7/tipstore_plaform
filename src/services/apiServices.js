
export const getAllMatchList = async () => {
    const ProxyServer = "https://cors.bridged.cc/";

    const res = await fetch(
      `${ProxyServer}http://www.woxiangwan.com/zcj/jincai/getAllMatchList`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          origin: "*",
          "x-request-url": "txt-api.7m.com.cn",
          "x-cors-grida-api-key": "fec76fa0-7a9f-44e5-b4da-1ad50c338b43",
        },
      }
    );

    return res.json();


  };

  export const getStrongMatchList = async () => {
    const ProxyServer = "https://cors.bridged.cc/";

    const res = await fetch(
      `${ProxyServer}http://www.woxiangwan.com/zcj/jincai/getWdList`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          origin: "*",
          "x-request-url": "txt-api.7m.com.cn",
          "x-cors-grida-api-key": "fec76fa0-7a9f-44e5-b4da-1ad50c338b43",
        },
      }
    );

    return res.json();


  };


  export const getSpecialOffer = async () => {
    const ProxyServer = "https://cors.bridged.cc/";

    const res = await fetch(
      `${ProxyServer}http://www.woxiangwan.com/zcj/jincai/getSdtjList`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          origin: "*",
          "x-request-url": "txt-api.7m.com.cn",
          "x-cors-grida-api-key": "fec76fa0-7a9f-44e5-b4da-1ad50c338b43",
        },
      }
    );

    return res.json();


  };
