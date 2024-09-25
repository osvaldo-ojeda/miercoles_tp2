// // console.log(process.argv);
// import { stdin, stdout } from "node:process";

// import commands from "./commands/commands.js";
// console.log(`🚀 ~ pwd:`, commands);
// // console.log(`🚀 ~ stdin:`, stdin)

// stdout.write("$ > ");

// stdin.on("data", (params) => {
//   const cmd = params.toString().trim();
//   if (cmd === "pwd") {
//     // const pwd = process.argv[1];
//     // stdout.write(`${pwd}\n`);
//     commands.pwd();
//   } else if (cmd === "date") {
//     commands.date();
//   }
//   stdout.write("$ > ");
// });
// ----------------------------------------------------
// console.log(process.argv);
import { stdin, stdout } from "node:process";
import commands from "./commands/commands.js";

stdout.write("$ > ");

stdin.on("data", (params) => {
  const data = params.toString().trim().split(" ");
  // console.log(`🚀 ~ stdin.on ~ data:`, data)
  const cmd=data[0]
  // console.log(`🚀 ~ stdin.on ~ cmd:`, cmd)
  commands[cmd](data[1]);
  stdout.write("$ > ");
});
