export const toCapitalize = (str) => {
  const arr = str.split(' ');
  const newStr = [];
  if (str.length < 4) {
    return str.toUpperCase();
  }
  arr.forEach((item) => {
    const letter = item.slice(0, 1).toUpperCase();
    newStr.push(item.replace(item.charAt(0), letter));
  });
  return newStr.join(' ');
};

export const slowImport = (value, ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
