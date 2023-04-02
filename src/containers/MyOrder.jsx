import { useContext } from 'react'
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import ArrowRight from './../../src/assets/icons/arrow_right.svg'
import '../styles/MyOrder.scss'

const MyOrder = () => {
  const { state } = useContext(AppContext)
  const subTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price
    const sum = state.cart.reduce(reducer, 0)
    return sum
  }
  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={ArrowRight} alt='arrow' />
        <p className='title-order'>My order</p>
      </div>
      <div className='my-order-content'>
        {
          state.cart.map((item) => (
            <OrderItem
              key={`orderItem-${item.id}`}
              product={item}
            />
          ))
        }
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${subTotal()}</p>
        </div>
        <button className='primary-button'>
          Checkout
        </button>
      </div>
    </aside>
  )
}

export default MyOrder
