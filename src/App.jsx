import Layout from './containers/Layout'
import { Outlet } from 'react-router-dom'
import './styles/global.scss'

function App () {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
