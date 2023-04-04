import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <div className='layout' style={{ backgroundColor: '#f7f7f7' }}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
