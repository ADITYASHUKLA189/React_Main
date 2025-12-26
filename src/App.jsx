import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode,setthemeMode]=useState('light')

  //initialy we dont have given anything inside the dark and light theme4
  const lightTheme=()=>{
        setthemeMode('light')
  }
  const darkTheme=()=>{
        setthemeMode('dark')
  }

  //actual  change in theme
  useEffect(()=>{
      document.querySelector('html').classList.remove("dark","light")
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
           <ThemeBtn/>
           <Card/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
