import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// my commands 
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Services from './Components/Services/Services.jsx'
import Projects from './Components/Projects/Projects.jsx'


const router= createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"Projects",
            element:<Projects/>
          },
          {
            path:"Skills",
            element:<Skills/>
          },
          {
            path:"Services",
            element:<Services/>
          }
        ]
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

