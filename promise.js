const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([12, 13, 14, 15, 16]);
  }, 1500);
});

const getSpecificItem = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const member = {
          titleName: "Corama",
          designation: "Painter",
          id: id,
        };
        resolve(member);
      },
      2000,
      itemId
    );
  });
};

getIds
  .then((result) => {
    console.log(result);
    return getSpecificItem(result[4]);
  })
  .then((specificItem) => console.log(specificItem))
  .catch((error) => console.log(error));
