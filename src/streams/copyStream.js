import fs from "node:fs";

const copyStream = (sourcePath, destinationDirectoryPath) => {
  const fileName = sourcePath.split("/").slice(-1).join();
  const destinationPath =
    destinationDirectoryPath === "/" || !destinationDirectoryPath
      ? fileName
      : `${destinationDirectoryPath}/${fileName}`;

  const readableStream = fs.createReadStream(sourcePath);
  const writableStream = fs.createWriteStream(destinationPath);

  readableStream.pipe(writableStream);
};

export default copyStream;
