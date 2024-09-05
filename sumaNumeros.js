const sumaNumeros = (array) => {
  const suma = array.reduce((value, element) => {
    return value + element;
  });
  console.log(`🚀 ~ sumaNumeros ~ suma:`, suma);
};
module.exports = sumaNumeros;
// -----------------------
// const sumaNumeros = (array) => {
//   const suma = array.reduce((value, element) => {
//     return value + element;
//   }, "");
//   console.log(`🚀 ~ sumaNumeros ~ suma:`, suma);
// };
// module.exports = sumaNumeros;
// ------------------------
// const sumaNumeros = (array) => {
//   const suma = array.reduce(
//     (value, element) => {
//       value.push(element);
//       return value;
//     },
//     ["hola"]
//   );
//   console.log(`🚀 ~ sumaNumeros ~ suma:`, suma);
// };
// module.exports = sumaNumeros;
