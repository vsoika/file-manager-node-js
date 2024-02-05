import { moveUp, list, changeDirectory } from "./src/nwd/index.js";
import { readFile } from "./src/streams/index.js";
import getOsData from "./src/os/getOsData.js";
import calculateHash from "./src/hash/calculateHash.js";
import { compress, decompress } from "./src/zip/index.js";
import {
  createFile,
  renameFile,
  deleteFile,
  moveFile,
  copyFile,
} from "./src/fs/index.js";

export const COMMANDS_LIST = {
  up: moveUp,
  cd: changeDirectory,
  ls: list,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: deleteFile,
  os: getOsData,
  hash: calculateHash,
  compress: compress,
  decompress: decompress,
};

export const OS_ARGUMENTS = {
  EOL: "EOL",
  CPUS: "cpus",
  HOMEDIR: "homedir",
  USERNAME: "username",
  ARCHITECTURE: "architecture",
};
