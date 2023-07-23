import { useEffect, useState } from "react";

const themes = ["light", "dark"];

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useState("dark");

  const toggleColorTheme = () =>
    setColorTheme(colorTheme == "dark" ? "light" : "dark");

  useEffect(() => {
    const storedColorTheme = localStorage.colorTheme;
    if (themes.includes(storedColorTheme)) setColorTheme(storedColorTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (colorTheme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.remove("light");
    }
    root.classList.add(colorTheme);
    localStorage.colorTheme = colorTheme;
  }, [colorTheme]);

  return { colorTheme, toggleColorTheme };
};

export default useColorTheme;
