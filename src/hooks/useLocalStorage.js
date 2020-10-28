import {useState} from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(()=> { //initial state is in return
    const item = window.localStorage.getItem(key); //retrieve from local storage
    return item ? JSON.parse(item) : initialValue; //if data retrieved, initial state is the parsed value, else initial value is set as the initial state
  });
  const setValue = value => { //setStoredValue + set local storage
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue]; //omit setStoredValue bc it's included in setValue
};
