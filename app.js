import express from "express";
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";
// import User from "./models/User.js";
// import Role from "./models/Role.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});

await connection.sync({force:false})

app.listen(8000, () => {
  console.log(`🚀 ~ app.listen ~ localhost:8000`);
});
