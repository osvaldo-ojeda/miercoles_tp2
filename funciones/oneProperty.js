const oneProperty = (array, str) => {
    const one = array.map((element) => {
      return { [str]: element[str] };
    });

//   const one = array.map((element) => ({ [str]: element[str] }));
  console.log(`🚀 ~ oneProperty ~ one:`, one);
};

module.exports = oneProperty;
