const getUserMessages = () => {
  const args = process.argv.slice(2);
  const userName = args.join().split("=")[1];

  const greetingCopy = `Welcome to the File Manager, ${userName}!`;
  const byeCopy = `Thank you for using File Manager, ${userName}, goodbye!`;

  return [greetingCopy, byeCopy];
};

export default getUserMessages;
