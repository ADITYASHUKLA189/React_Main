import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

const router= createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:"",
            element:<Home/>

          },{
                path:"about",
                element:<About/>
          },{
               path:"Contact",
               element:<Contact/>
          },{
            path:"Github",
            element:<Github/>,
            loader:githubInfoLoader
          }
          ,{
               path:"user/:userid",
               element:<User/>
          }
        ]
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
