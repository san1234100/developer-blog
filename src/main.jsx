import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PostPage from './pages/PostPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/posts',
        element:<PostPage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
    ],
    errorElement:<ErrorPage/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
