import '../styles/MenuSidevar.scss'

const MenuSidevar = () => {
  return (
    <div className='menu-sidevar'>
      <ul className='root-sidevar'>
        <li>
          <a href='/'>CATEGORIES</a>
        </li>
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
      <ul className='info'>
        <li>
          <a href='/orders'>My orders</a>
        </li>
        <li>
          <a href='/account'>My account</a>
        </li>
      </ul>
      <div className='info-account'>
        <span className='email'>
          mail@example.com
        </span>
        <span className='sign-out'>
          sing-out
        </span>
      </div>
    </div>
  )
}

export default MenuSidevar
