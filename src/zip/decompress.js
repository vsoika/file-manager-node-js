import { createBrotliDecompress } from "node:zlib";
import { createReadStream, createWriteStream, existsSync } from "node:fs";

const decompress = (sourcePath, destinationPath) => {
  const isSourceExists = existsSync(sourcePath);
  const isDestinationExists = existsSync(destinationPath);

  if (!isSourceExists || !isDestinationExists) {
    console.log(
      "Invalid input: provided source or destination path does not exist. Specify a path to an existing directory as a destination path."
    );
    return;
  }

  const fileName = sourcePath.split("/").slice(-1).join().replace(".br", "");
  const decompressedFilePath =
    destinationPath === "/" || !destinationPath
      ? fileName
      : `${destinationPath}/${fileName}`;

  return new Promise((resolve) => {
    const stream = createReadStream(sourcePath);
    stream
      .pipe(createBrotliDecompress())
      .pipe(createWriteStream(decompressedFilePath))
      .on("finish", () => {
        console.log(`Decompression is completed: ${decompressedFilePath}`);
        resolve();
      });
  });
};

export default decompress;
