import { cwd } from 'node:process';

const getDirectoryNotification = () => {
  return `You are currently in ${cwd()}`;
};

export default getDirectoryNotification;
