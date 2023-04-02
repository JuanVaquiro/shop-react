import Layout from './containers/Layout'
import { Outlet } from 'react-router-dom'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'

import './styles/global.scss'

function App () {
  const initialStte = useInitialState()
  return (
    <AppContext.Provider value={initialStte}>
      <Layout>
        <Outlet />
      </Layout>
    </AppContext.Provider>
  )
}

export default App
