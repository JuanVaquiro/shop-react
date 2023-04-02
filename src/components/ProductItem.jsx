
import { useState } from 'react'
import AddCart from './../../src/assets/icons/add_shopping_cart.svg'
import '../styles/ProductItem.scss'

const ProductItem = () => {
  const [cart, setCart] = useState([])

  const handleCart = () => {
    setCart('gola')
  }

  return (
    <div className='ProductItem'>
      <img src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
      <div className='product-info'>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleCart}>
          <img src={AddCart} alt='add Cart' />
          {cart}
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
