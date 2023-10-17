import { useState, useContext } from 'react'
import Menu from './Menu'
import MyOrder from '../containers/MyOrder'
import AppContext from '../context/AppContext'
import LogoS from './../../src/assets/logos/logo_sale.svg'
import IconMenu from './../../src/assets/icons/icon_menu.svg'
import '../styles/Header.scss'
import MenuSidevar from './MenuSidevar'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toogleSidevar, setToogleSidevar] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleToggleSidevar = () => {
    setToogleSidevar(!toogleSidevar)
  }

  return (
    <nav className='nav'>
      <img
        onClick={handleToggleSidevar}
        src={IconMenu}
        alt='menu'
        className='menu'
      />
      <div className='navbar-left'>
        <div className='container-logo'>
          <Link to='/'>
            <strong>Ecommerce</strong>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='home'>All</Link>
          </li>
          <li>
            <Link to='home'>Electroni</Link>
          </li>
          <li>
            <Link to='home'>Others</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            you@gmail.com
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={LogoS} alt='shopping cart' />
            {
              state.cart.length > 0
                ? <div className='number-item'>{state.cart.length}</div>
                : null
            }
          </li>
        </ul>
      </div>
      {
        toggle && <Menu />
      }
      {
        toogleSidevar && <MenuSidevar />
      }
      {
        toggleOrders && <MyOrder setToggle={setToggleOrders} />
      }

    </nav>
  )
}

export default Header
