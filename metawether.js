// 6.7924° S, 39.2083° E

async function getWhetherData(woeid) {
  // https://www.metaweather.com/api/location/1528488/
  const url = `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`;
  try {
    const rawJSON = await fetch(
      url,
      {
        Headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      },
      // { mode: "cors" }
    );
    const data = await rawJSON.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getWhetherData(1528488);
