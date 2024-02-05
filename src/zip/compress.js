import { createBrotliCompress } from "node:zlib";
import { createReadStream, createWriteStream, existsSync } from "node:fs";

const compress = (sourcePath, archivePath) => {
  const isSourceExists = existsSync(sourcePath);
  const isDestinationExists = existsSync(archivePath);

  if (!isSourceExists || !isDestinationExists) {
    console.log(
      "Invalid input: provided source or destination path does not exist"
    );
    return;
  }

  const fileName = sourcePath.split("/").slice(-1).join();
  const destinationPath =
    archivePath === "/" || !archivePath
      ? `${fileName}.br`
      : `${archivePath}/${fileName}.br`;

  return new Promise((resolve) => {
    const stream = createReadStream(sourcePath);
    stream
      .pipe(createBrotliCompress())
      .pipe(createWriteStream(destinationPath))
      .on("finish", () => {
        console.log(`Compression is completed: ${destinationPath}`);
        resolve();
      });
  });
};

export default compress;
