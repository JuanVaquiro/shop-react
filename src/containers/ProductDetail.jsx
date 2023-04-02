import ProductInfo from 'components/ProductInfo'
import IconClose from './../../src/assets/icons/icon_close.svg'
import '../styles/ProductDetail.scss'

const ProductDetail = () => {
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src={IconClose} alt='close' />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
