import { Sequelize } from "sequelize";
import  { DB_NAME, DB_DIALECT, DB_HOST, DB_PASS, DB_PORT, DB_USER} from "../config/config.js"

const connection = new Sequelize(DB_NAME,DB_USER , DB_PASS, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
