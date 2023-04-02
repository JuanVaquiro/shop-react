import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import RecoveryPassword from './pages/PasswordRecovery'
import Home from './pages/Home'
import SendEmail from './pages/SendEmail'
import NewPassword from './pages/NewPassword'
import MyAccount from './pages/MyAcount'
import CreateAccount from './pages/CreateAccount'
import Checkout from './pages/Checkout'
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
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'recovery-password',
        element: <RecoveryPassword />
      },
      {
        path: 'send-email',
        element: <SendEmail />
      },
      {
        path: 'new-password',
        element: <NewPassword />
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
        path: 'checkout',
        element: <Checkout />
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
