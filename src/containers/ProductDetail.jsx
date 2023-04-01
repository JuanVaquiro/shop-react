import ProductInfo from '../components/ProductInfo'
import '../styles/ProductDetail.scss'

const ProductDetail = () => {
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src='./../../src/assets/icons/icon_close.svg' alt='close' />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
