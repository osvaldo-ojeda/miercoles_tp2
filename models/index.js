import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User)
User.belongsTo(Role)


export  { Role, User };
