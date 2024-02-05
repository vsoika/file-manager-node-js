export default function validateFileName(name) {
  if (!name || name.length > 255) {
    return false;
  }

  if (/[<>:"/\\|?*\u0000-\u001F]/g.test(name)) {
    return false;
  }

  if (name === "." || name === "..") {
    return false;
  }

  return true;
}
