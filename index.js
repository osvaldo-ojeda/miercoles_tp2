import express from "express";
import routes from "./routes/routes.js";
import { notFound } from "./midlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
// import roleSeed from "./seed/roleSeed.js";

// crear el server
const app = express();

// ---------------
// fundamentales
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// midlewares

app.use("/app", routes);

app.use(notFound);

await connection.sync({ force: true });
// await roleSeed()

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ listen: on port ${SERVER_PORT}`);
});
