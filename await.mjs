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

const bigData = {
  name: "Big data",
  whatItDoes: () => {
    console.log("gathers the data information");
  },
  subBranch: {
    branch1: {
      location: "Kigoma",
      employees: 3,
    },
    branch1: {
      location: "Arusha",
      employees: 6,
    },
  },
  bigDataInfo: () => {
    bigData.whatItDoes();
    // bigData.bigDataInfo();
  },
};
bigData.bigDataInfo();
