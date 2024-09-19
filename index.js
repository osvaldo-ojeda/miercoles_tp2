// const fs = require("node:fs")
import fs from "node:fs";
// console.log(`🚀 ~ fs:`, fs)

// function readFile() {
//   try {
//     const file = fs.readFileSync("./package.json", "utf-8");
//     console.log(`🚀 ~ readFile ~ file:`, file);
//   } catch (error) {
//     console.log(`🚀 ~ readFile ~ error:`, error.message);
//   }
// }

async function readFile() {
  try {
    const file = await fs.promises.readFile("./package.jso", "utf-8");
    console.log(`🚀 ~ readFile ~ file:`, file);
    //     return file;
  } catch (error) {
    console.log(`🚀 ~ readFile ~ error:`, error.message);
    await appendFile(error)
  }
}

async function appendFile(params) {
  try {
    await fs.promises.appendFile("text.txt", `${params}\n`);
  } catch (error) {
    console.log(`🚀 ~ appendFile ~ error:`, error);
    await fs.promises.appendFile("error.txt", `${error}\n`);
  }
}

readFile();
// appendFile("hola");
