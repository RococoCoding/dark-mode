import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(key) {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  return [darkMode, setDarkMode];
}