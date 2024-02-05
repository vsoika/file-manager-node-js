import os from "node:os";
import { OS_ARGUMENTS } from "../../constants.js";

const getOsData = (arg = "") => {
  switch (arg.slice(2)) {
    case OS_ARGUMENTS.EOL:
      console.log(os.EOL);
      break;
    case OS_ARGUMENTS.CPUS:
      console.log(`OS contains ${os.cpus().length} CPU cores.`);
      console.log(os.cpus());
      break;
    case OS_ARGUMENTS.HOMEDIR:
      console.log(os.homedir());
      break;
    case OS_ARGUMENTS.USERNAME:
      console.log(os.userInfo().username);
      break;
    case OS_ARGUMENTS.ARCHITECTURE:
      console.log(os.arch());
      break;

    default:
      console.log("Invalid input: provided argument is not valid");
  }
};

export default getOsData;
