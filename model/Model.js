class Model {
  data = [
    { id: 1, palabra: "perro" },
    { id: 2, palabra: "gato" },
  ];

  getFrase = () => {
    //     return this.data.join(" ");
    return this.data;
  };
}

export default Model;
