
import { useContext } from 'react'
import AppContext from '../context/AppContext'
import AddCart from './../../src/assets/icons/add_shopping_cart.svg'
import Shopping from './../../src/assets/icons/shopping_cart.svg'
import '../styles/ProductItem.scss'

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext)

  const handleCart = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item)
  }

  const itsProductAdded = () => !!state.cart.some((item) => item.id === product.id)

  return (
    <div className='ProductItem'>
      <img src={product.img} alt={product.name} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          {
            itsProductAdded()
              ? (
                <img className='add-shopping-cart' src={AddCart} alt='' />
                )
              : (
                <img src={Shopping} alt='' />
                )
          }
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
