import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './components/routes/route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
