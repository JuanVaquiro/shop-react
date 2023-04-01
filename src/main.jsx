import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './containers/login'
import RecoveryPassword from './containers/RecoveryPassword'
import Home from './pages/Home'
import ErrorPage from './pages/Error-page'
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
