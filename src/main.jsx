import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Home from './pages/Home'
import MyAccount from './pages/MyAcount'
import CreateAccount from './pages/Logup'
import Index from './pages/Index'
import Orders from './pages/Order'
import ErrorPage from './pages/NotFound'
import './styles/global.scss'

// You can do this: create your routes as JSX instead of objects.
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Home />} />
//       <Route path="login" element={<login />} />
//       <Route path="recovery-password" element={<RecoveryPassword />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'account',
        element: <MyAccount />
      },
      {
        path: 'signup',
        element: <CreateAccount />
      },
      {
        path: 'orders',
        element: <Orders />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
