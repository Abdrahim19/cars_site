import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Applayout from './layout/Applayout'
import ErrorBoundary from './components/commen/ErrorBoundary'

const router = createBrowserRouter([
  {element:<Applayout /> , path: '/' , errorElement:<ErrorBoundary />}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
