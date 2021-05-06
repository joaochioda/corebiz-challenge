export function saveLocalStorage(value) {
  localStorage.setItem(Date.now(), JSON.stringify(value));
}

export function getLocalStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    if (new Date(parseInt(keys[i])).getTime() > 0) {
      values.push(localStorage.getItem(keys[i]));
    }
  }
  return values;
}
