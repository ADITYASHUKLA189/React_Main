import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
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
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
           <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
