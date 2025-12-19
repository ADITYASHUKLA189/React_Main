import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15); // this is a hook to update the value[value,function]


  const addvalue=()=>{
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
  }
  const decvalue=()=>{
      console.log("value added",Math.random()+2);
      setCounter(counter-1);
      setCounter(counter-1);
      setCounter(counter-1);
      setCounter(counter-1);
  }

  return (
    <>
        <h1>hello the hello</h1>
        <h2>Counter value: {counter}</h2>
        <button id='inc'
        onClick={addvalue}
        >Inc value{counter}</button>
        <br />
        <br />
        <button id='dec'
        onClick={decvalue}
        >Dcr value{counter}</button>
    </>
  )
}

export default App
