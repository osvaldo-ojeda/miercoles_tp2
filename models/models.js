import Role from "./Role.js";
import User from "./User.js";

User.belongsTo(Role)
Role.hasMany(User)

export {Role, User}



