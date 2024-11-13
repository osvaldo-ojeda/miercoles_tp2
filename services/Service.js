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
  // getUserByIdService = async (id) => {
  //   return `getUserByIdService ${id}`;
  // };
  // createUserService = async (name, password) => {
  //   return `createUserService ${name} ${password}`;
  // };
  // updateUserService = async (name,password ) => {
  //   return `updateUserService ${name, password}`;
  // };
  // deleteUserService = async (id) => {
  //   return `deleteUserService ${id}`;
  // };
}

export default Service;
