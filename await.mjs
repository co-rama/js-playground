const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([12, 13, 14, 15, 16]);
  }, 1500);
});

async function printID() {
  const ids = await getIds;
  console.log(ids);
}
printID();
