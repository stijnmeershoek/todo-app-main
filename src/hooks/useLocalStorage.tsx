import { useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T, Setter<T>];
function useLocalStorage<T>(
  key: string,
  initialValue?: T,
) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
  
    const setValue = (value: (value: any) => any) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
  
        setStoredValue(valueToStore);
  
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  };

  export default useLocalStorage;