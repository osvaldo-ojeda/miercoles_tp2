import express from "express";

const server = express();
// console.log(`🚀 ~ server:`, server)

server.use(express.static("public"));

const data = [{ id: 1, nombre: "kuka" }];

server.get("/", (request, response) => {
  response.send("get all");
});
server.get("/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("get by id");
});
server.post("/", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("create");
});
server.put("/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("update");
});
server.delete("/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("delete");
});

server.listen(8000, () => {
  console.log(`🚀 ~ server.listen ~ on port 8000`);
});
