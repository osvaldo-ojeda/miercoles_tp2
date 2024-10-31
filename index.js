import express from "express";
import routes from "./routes/routes.js";
import { notFound } from "./midlewares/notFound.js";
import connection from "./connection/connection.js";
// import User from "./models/User.js";
// import Role from "./models/Role.js";

// crear el server
const app = express();

// ---------------
// fundamentales
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// midlewares

app.use("/app", routes);

app.use(notFound);

connection.sync({ force: false});

app.listen(8000, () => {
  console.log(`🚀 ~ app.listen ~ listen: on port 8000`);
});
