export const get = (key) => (obj) => obj[key];

export const numberPad = (n, width = 2) => (n.length >= width ? n : new Array(width - n.length + 1).join('0') + n);

export const sortObjectByOrder = (object) => object.sort((a, b) => {
  if (a.order > b.order) {
    return 1;
  }
  if (a.order < b.order) {
    return -1;
  }
  return 0;
});
