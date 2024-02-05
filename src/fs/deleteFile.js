import fs from "node:fs/promises";
import { existsSync } from "fs";

const deleteFile = async (sourcePath) => {
  try {
    const isSourceExists = existsSync(sourcePath);

    if (!isSourceExists) {
      console.log("Invalid input: provided source path does not exist");
      return;
    }

    await fs.unlink(sourcePath);
  } catch (err) {
    console.log(err);
  }
};

export default deleteFile;
