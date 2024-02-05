import { createHash } from "node:crypto";
import fs from "node:fs";
import { existsSync } from "fs";

const calculateHash = async (sourcePath) => {
  try {
    const isSourceExists = existsSync(sourcePath);

    if (!isSourceExists) {
      console.log("Invalid input: provided source path does not exist");
      return;
    }

    return new Promise((resolve) => {
      const hash = createHash("sha256");
      const input = fs.createReadStream(sourcePath);

      input
        .pipe(hash)
        .setEncoding("hex")
        .on("data", (data) => {
          console.log(data);
          resolve();
        });
    });
  } catch (err) {
    console.log(err);
  }
};

export default calculateHash;
