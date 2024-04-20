{/* 

import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from './Components/MainPage.tsx'
import { LoginForm } from './Components/LoginForm.tsx'
import { AdminLogin } from './Components/Admin.tsx'
import { Guest, LoggedIn } from './Components/auth/index.tsx'
import { ApiContext } from './api.tsx'
import { UserProfile } from './Components/UserProfile.tsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'login',
        element: <LoginForm/>
      },
      {
        path: 'admin',
        element: <AdminLogin />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
*/}


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from './api.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)





