import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/HomePage/Home.tsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: (
          <>
              <App />
          </>
      ),
      children: [
        {
          path: '/',
          element: (
            <>
              <Home />
            </>
          )
        }
      ]
  },
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
