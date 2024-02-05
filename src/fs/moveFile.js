import { existsSync } from "node:fs";
import { copyStream } from "../streams/index.js";
import deleteFile from "./deleteFile.js";

const moveFile = async (sourcePath, destinationDirectoryPath) => {
  const isSourceExists = existsSync(sourcePath);
  const isDestinationExists = existsSync(destinationDirectoryPath);

  if (!isSourceExists || !isDestinationExists) {
    console.log(
      "Invalid input: provided source path or destination directory does not exist"
    );
    return;
  }

  return new Promise(async (resolve) => {
    copyStream(sourcePath, destinationDirectoryPath);
    await deleteFile(sourcePath);
    resolve();
  });
};

export default moveFile;
