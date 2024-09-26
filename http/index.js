import http from "node:http";
// console.log(`🚀 ~ http:`, http)

const server = http.createServer((request, response) => {
  if ((request.url === "/hola") & (request.method === "GET")) {
    response.end("hola miercoles");
  }
  if ((request.url === "/hola") & (request.method === "POST")) {
    response.end("hola miercoles POST");
  }
  //   console.log(`🚀 ~ server ~ request:`, request);
});
// console.log(`🚀 ~ server:`, server)

server.listen(8000, () => {
  console.log(`🚀 ~ server.listen ~ on port 8000`);
});
