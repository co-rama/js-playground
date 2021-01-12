// 6.7924° S, 39.2083° E

async function getWhetherData(woeid) {
    // https://www.metaweather.com/api/location/1528488/
  const url = `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`;
  const rawJSON = await fetch(url);
  const data = await rawJSON.json();
  console.log(rawJSON);
}

getWhetherData(1528488);
