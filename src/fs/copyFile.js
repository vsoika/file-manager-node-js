import { existsSync } from "node:fs";
import { copyStream } from "../streams/index.js";

const copyFile = async (sourcePath, destinationDirectoryPath) => {
  const isSourceExists = existsSync(sourcePath);
  const isDestinationExists = existsSync(destinationDirectoryPath);

  if (!isSourceExists || !isDestinationExists) {
    console.log(
      "Invalid input: provided source path or destination directory does not exist"
    );
    return;
  }

  return new Promise((resolve) => {
    copyStream(sourcePath, destinationDirectoryPath);
    resolve();
  });
};

export default copyFile;
