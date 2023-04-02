import IconClose from './../../src/assets/icons/icon_close.svg'
import '../styles/OrderItem.scss'

const OrderItem = ({ product }) => {
  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={IconClose} alt='close' />
    </div>
  )
}

export default OrderItem
