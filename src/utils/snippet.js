export const get = (key) => (obj) => obj[key];

export const numberPad = (n, width = 2) => (n.length >= width
  ? n
  : new Array(width - n.length + 1).join('0') + n);
