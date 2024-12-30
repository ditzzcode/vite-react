import { useState , useContext , createContext } from "react";

const ThemeContext = createContext();

export const Themed = () => {
  const [theme , setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

return (
  <ThemeContext.Provider value={{theme , toggleTheme}}>
    <ThemedButton/>
  </ThemeContext.Provider>
)
}

function ThemedButton(){
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <button
      style={{backgroundColor:themeContext.theme === "light" ? "white" : "black" , color:themeContext.theme === "light" ? "black" : "white"}}
      onClick={themeContext.toggleTheme}>Change mode to {themeContext.theme} mode</button>
    </div>
  )
}