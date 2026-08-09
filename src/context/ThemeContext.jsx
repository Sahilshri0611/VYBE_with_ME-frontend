import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const ThemeContext =
  createContext();


export function ThemeProvider({
  children
}) {

  const [
    theme,
    setTheme
  ] = useState(() => {

    const savedTheme =
      localStorage.getItem(
        "vybe-theme"
      );

    return (
      savedTheme || "dark"
    );

  });


  useEffect(() => {

    document.documentElement
      .setAttribute(
        "data-theme",
        theme
      );


    localStorage.setItem(
      "vybe-theme",
      theme
    );

  }, [theme]);


  const toggleTheme = () => {

    setTheme(
      (previousTheme) => {

        if (
          previousTheme === "dark"
        ) {

          return "light";

        }

        return "dark";

      }
    );

  };


  return (

    <ThemeContext.Provider

      value={{
        theme,
        setTheme,
        toggleTheme
      }}

    >

      {children}

    </ThemeContext.Provider>

  );

}


export function useTheme() {

  return useContext(
    ThemeContext
  );

}