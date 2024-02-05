import fs from "node:fs/promises";
import { cwd } from "node:process";

const list = async () => {
  let directories = [];
  let files = [];

  try {
    const dirents = await fs.readdir(cwd(), { withFileTypes: true });

    dirents.forEach((dirent) => {
      if (dirent.isDirectory()) {
        directories.push({ Name: dirent.name, Type: "directory" });
      } else {
        files.push({ Name: dirent.name, Type: "file" });
      }
    });

    console.table([...directories, ...files]);
  } catch {
    console.log('Operation failed');
  }
};

export default list;
