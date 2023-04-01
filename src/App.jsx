import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.scss'
import ErrorPage from './pages/Error-page'
import Layout from './containers/Layout'
import Login from './containers/login'
import Home from './pages/Home'
import RecoveryPassword from './containers/RecoveryPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'recovery-pssword',
    element: <RecoveryPassword />
  }
])

function App () {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
