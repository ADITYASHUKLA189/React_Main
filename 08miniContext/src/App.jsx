import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
     <h1 className='bg-blue-400 rounded-full'>Hello niyari</h1>
     <br />
     <br />
     <Login />
     <br />
     <br />
     <Profile />
   </UserContextProvider>
  )
}

export default App
