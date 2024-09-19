// console.log(process.argv);
import { stdin, stdout } from "node:process";
// console.log(`🚀 ~ stdin:`, stdin)

stdout.write("$> ");

stdin.on("data", (params) => {
  const commands = params.toString().trim();
  if (commands === "pwd") {
    const pwd = process.argv[1];
    stdout.write(`${pwd}\n`);
  }
  stdout.write("$> ");
});
