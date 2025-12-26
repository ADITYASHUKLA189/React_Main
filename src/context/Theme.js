import {React,useContext,createContext} from "react";

const ThemeContext=createContext({
      themeMode:"dark",
      lightTheme:()=>{},
      darktTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
       return useContext(ThemeContext)
}