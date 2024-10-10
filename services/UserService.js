class UserService {
  getAllUsersService = async () => {
    return "getAllUserService";
  };
  getUserByIdService = async (id) => {
    return `getUserByIdService ${id}`;
  };
  createUserService = async (name, password) => {
    return `createUserService ${name} ${password}`;
  };
  updateUserService = async (name,password ) => {
    return `updateUserService ${name, password}`;
  };
  deleteUserService = async (id) => {
    return `deleteUserService ${id}`;
  };
}

export default UserService;
