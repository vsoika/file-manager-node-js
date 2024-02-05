import fs from "node:fs/promises";
import { cwd } from "node:process";
import validateFileName from "../utils/validateFileName.js";

const createFile = async (fileName) => {
  const isValidFileName = validateFileName(fileName);

  if (!isValidFileName) {
    console.log("Invalid input: provided file name is not valid");
    return;
  }
  
  if (!fileName) {
    console.log("Invalid input: file name is not provided");
    return;
  }

  try {
    console.log(cwd(), fileName);
    await fs.appendFile(`${cwd()}/${fileName}`, "");
  } catch (err) {
    console.log(err);
  }
};

export default createFile;
