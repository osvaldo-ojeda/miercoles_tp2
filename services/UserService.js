import {User, Role} from "../models/index.js"

class UserService {
  getAllUsersService = async () => {
    try {
      const data = await User.findAll({
        attributes:["name"],
        include:Role
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getUserByIdService = (id) => {
    return "get user by id service";
  };
  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateUserService = (id) => {
    return "update user service";
  };
  deleteUserService = (id) => {
    return "delete user service";
  };
}

export default UserService;
