import fs from "node:fs/promises";
import { existsSync } from "fs";
import validateFileName from "../utils/validateFileName.js";

const renameFile = async (sourcePath, newFileName) => {
  const isValidFileName = validateFileName(newFileName);
  const isSourceExists = existsSync(sourcePath);

  if (!newFileName) {
    console.log("Invalid input: file name is not provided");
    return;
  }

  if (!isValidFileName) {
    console.log("Invalid input: file name is not valid");
    return;
  }

  if (!isSourceExists) {
    console.log("Invalid input: provided source path does not exist");
    return;
  }

  try {
    const sourceDirectory = sourcePath.split("/").slice(0, -1).join("/");
    const newSourcePath = sourceDirectory
      ? `${sourceDirectory}/${newFileName}`
      : newFileName;

    await fs.rename(sourcePath, newSourcePath);
  } catch (err) {
    console.log(err);
  }
};

export default renameFile;
