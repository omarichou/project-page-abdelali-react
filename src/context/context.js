import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
 

  const initialData = { theme: "light" };
  const reducer = (firstState, action) => {
    switch (action.type) {
      case "CHANGE-THEME":
        return { ...firstState, theme: action.newValue };
      default:
        return firstState;
    }}
  
  export function ThemeProvider({ children }) {
    const [theme, distheme] = useReducer(reducer, initialData);

  const changetheme = (value) => {
  
    distheme({ type: "CHANGE-THEME", newValue: value });

  
  }
  
    return (
       <ThemeContexttt.Provider value={{ ...theme , changetheme}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;