export function saveLocalStorage(value) {
  localStorage.setItem(`keyshop=${Date.now()}`, JSON.stringify(value));
}

function validateIfIsKeyShop(string) {
  const indexMatch = string.search("keyshop=");
  const keyShopLength = "keyshop=".length;
  return string.substring(indexMatch + keyShopLength, string.length) > 0;
}

export function getLocalStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    validateIfIsKeyShop(keys[i]);

    if (validateIfIsKeyShop(keys[i]) > 0) {
      values.push(localStorage.getItem(keys[i]));
    }
  }
  return values;
}
