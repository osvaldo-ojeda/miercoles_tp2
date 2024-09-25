import { stdin, stdout } from "node:process";
import fs from "node:fs";

function pwd(params) {
  const pwd = process.argv[1];
  stdout.write(`${pwd}\n`);
}
function date(params) {
  const date = Date();
  stdout.write(`${date}\n`);
}
function ls(params) {
//   const list = fs.readdirSync(".");
  const list = fs.promises.readFile(".")
  console.log(`🚀 ~ ls ~ list:`, list)
//   const data = list.join(" ").replaceAll(" ", "\n");
//   stdout.write(`${data}\n`);
}
function cat(params) {
  const data = fs.readFileSync(params, "utf-8");
  stdout.write(`${data}\n`);
}

export default { pwd, date, ls, cat };
