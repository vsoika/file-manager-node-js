import { existsSync } from "node:fs";
import fs from "node:fs";

const readFile = async (sourcePath) => {
  const isSourceExists = existsSync(sourcePath);

  if (!isSourceExists) {
    console.log("Invalid input: provided file path does not exist");
    return;
  }

  return new Promise((resolve) => {
    const stream = fs.createReadStream(sourcePath);
    stream
      .on("data", (data) => {
        console.log(`${data}\n`);
        resolve();
      })
      .on("error", (err) => {
        console.log(
          `Invalid input: ${sourcePath} ${
            err.code === "EISDIR" ? "directory is not readable" : "is not valid"
          }`
        );
        resolve();
      });
  });
};

export default readFile;
