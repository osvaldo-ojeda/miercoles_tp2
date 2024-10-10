// imports
import express from "express";
import routes from "./routes/routes.js";
import { getDate } from "./midlewares/getDate.js";
import {notFound} from "./midlewares/notFound.js"
import morgan from "morgan"
// console.log(`🚀 ~ express:`, express)

// crear el server
const app = express();

// ---------------
// fundamentales
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan("tiny"))
// midlewares
function logger(req, res, next) {
     console.log(`🚀 ~ logger ~ req:`, req.url);
     next();
}
app.use(logger);

app.use(function (req, res, next) {
     console.log(`🚀 ~ Method:`, req.method);
     next();
});


// ---------------
// rutas

app.use("/app", getDate, routes);

app.use(notFound)

// listen
app.listen(8000, () => {
  console.log(`🚀 ~ app.listen ~ listen: on port 8000`);
});

