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
        <img src={product.img} alt={product.name} />
      </figure>
      <p>{product.name}</p>
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
