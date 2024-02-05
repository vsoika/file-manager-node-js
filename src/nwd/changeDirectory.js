import { existsSync } from "node:fs";

const changeDirectory = (destinationPath) => {
  const isSourceExists = existsSync(destinationPath);
  if (!isSourceExists) {
    console.log("Invalid input: Provided directory does not exist");
    return;
  }

  process.chdir(destinationPath);
};

export default changeDirectory;
