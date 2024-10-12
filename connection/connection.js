import { Sequelize } from "sequelize";

const connection = new Sequelize("jueves", "root", "", {
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
