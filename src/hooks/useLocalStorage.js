export default function useLocalStorage() {
  function setLocalStorage(key, value) {
    try {
      if (typeof window !== "undefined") {
        // browser code
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.log(
        `ERROR: While setting local storage for key value pair: ${key} & ${value}`,
        err
      );
    }
  }

  function getLocalStorage(key, initialValue) {
    try {
      if (typeof window !== "undefined") {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
      }
    } catch (err) {
      console.log(
        `ERROR: While setting local storage for key value pair: ${key} & ${initialValue}`,
        err
      );
      return initialValue;
    }
  }

  return { setLocalStorage, getLocalStorage };
}
