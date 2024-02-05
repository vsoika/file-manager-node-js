import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import getUserMessages from "./src/cli/getUserMessages.js";
import getDirectoryNotification from "./src/path/getDirectoryNotification.js";
import { COMMANDS_LIST } from "./constants.js";

const runFileManager = async () => {
  try {
    const [greetingCopy, byeCopy] = getUserMessages();
    const directoryNotification = getDirectoryNotification();

    console.log(greetingCopy);
    console.log(directoryNotification);

    const rl = readline.createInterface({ input, output });
    rl.prompt();

    rl.on("line", async (line) => {
      const [command, ...args] = line.trim().split(" ");

      if (command === ".exit") {
        console.log(byeCopy);
        process.exit(0);
      }

      const isValidCommand = Object.keys(COMMANDS_LIST).includes(command);

      if (!isValidCommand) {
        console.log("Invalid input: command is not valid");
        console.log(getDirectoryNotification());
        rl.prompt();
      } else {
        await COMMANDS_LIST[command](...args);
        console.log(getDirectoryNotification());
        rl.prompt();
      }
    }).on("close", () => {
      console.log(byeCopy);
      process.exit(0);
    });
  } catch (err) {
    console.log("Operation failed");
  }
};

await runFileManager();
