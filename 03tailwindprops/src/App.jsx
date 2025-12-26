import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  let myObj={
    username:'mewas',
    age:12
  };
  
  return (
    <>
      <h1 className="bg-amber-900 p-4 text-2xl text-amber-100 rounded-3xl">
        tailwind class
      </h1>
      <Card username="adityashukla"/>
      <Card username="vickey"/>
      <Card username="shukla"/>
    
    </>
  );
}

export default App;
