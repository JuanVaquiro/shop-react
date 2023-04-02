import { useContext } from 'react'
import AppContext from '../context/AppContext.js'
import IconClose from './../../src/assets/icons/icon_close.svg'
import '../styles/OrderItem.scss'

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext)
  const handleRemove = (index) => {
    removeFromCart(index)
  }
  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img
        onClick={() => handleRemove(indexValue)}
        src={IconClose}
        alt='close'
      />
    </div>
  )
}

export default OrderItem
