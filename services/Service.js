import Model from "../model/Model.js";

class Service {
  model = new Model();

  getAllFraseService = async () => {
    try {
      const data = this.model.getFrase();
      const frase = data.map((palabra) => palabra.palabra).join(" ");
      return frase;
    } catch (error) {
      throw error;
    }
  };
  getPalabrasApiService = async (cantidad) => {
    try {
      const data = this.model.getFrase();
      const frase = data.map((palabra) => palabra.palabra)

      const api= await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`)
      const apiJson=await api.json()

      return [...apiJson.palabras, ...frase];
    } catch (error) {
      throw error;
    }
  };

  createService = async (palabra) => {
    try {
      if (!palabra) throw new Error("Tenes que ingresar una palabra");

      const frase = this.model.create(palabra)
      return frase;

    } catch (error) {
      throw error;
    }
  };

}

export default Service;
