import { useState } from 'react'
import Menu from './Menu'
import LogoS from './../../src/assets/logos/logo_sale.svg'
import IconMenu from './../../src/assets/icons/icon_menu.svg'
import YardSale from './../../src/assets/logos/yard_sale.svg'
import '../styles/Header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav>
      <img src={IconMenu} alt='menu' className='menu' />
      <div className='navbar-left'>
        <div className='container-logo'>
          <img src={YardSale} alt='logo' className='nav-logo' />
          <strong>Ecommerce</strong>
        </div>
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className='navbar-shopping-cart'>
            <img src={LogoS} alt='shopping cart' />
            <div>2</div>
          </li>
        </ul>
      </div>
      {
        toggle && <Menu />
      }
    </nav>
  )
}

export default Header
