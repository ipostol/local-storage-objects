const LS = {

  getItem(key) {

    const item = localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }

  },

  setItem(key, value) {

    try {
      if (typeof value === 'string') {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
      return true;
    } catch (e) {
      return false;
    }

  },

  clearKey(key) {
    return localStorage.setItem(key, undefined);
  },

  clear() {
    return localStorage.clear();
  },

};

export default LS;
