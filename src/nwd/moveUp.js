import path from "node:path";
import { cwd } from "node:process";

const moveUp = () => {
  process.chdir(path.join(cwd(), "../"));
};

export default moveUp;
