function abbrevName(str) {
  //   const strSplit = str.split(" ");
  //   const strMap = strSplit.map((element) => {
  //     return element[0].toUpperCase();
  //   });
  //   const strJoin = strMap.join(".");

  //   console.log(`🚀 ~ abbrevName ~ strSplit:`, strSplit);
  //   console.log(`🚀 ~ abbrevName ~ strMap:`, strMap);
  //   console.log(`🚀 ~ abbrevName ~ strJoin:`, strJoin);
  //   //   console.log(`🚀 ~ abbrevName ~ str:`, str);

  const initials = str
    .split(" ")
    .map((element) => element[0].toUpperCase())
    .join(".");
  console.log(`🚀 ~ abbrevName ~ initials:`, initials);
}

module.exports = abbrevName;
