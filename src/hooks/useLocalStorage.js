const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    setItem,
    getItem,
  };
};

export default useLocalStorage;
