
import ProductItem from '../components/ProductItem'
import useFetchProducts from '../hooks/useFetchProducts'
import '../styles/ProductList.scss'

const API = 'http://localhost:3000/product'

const ProductList = () => {
  const products = useFetchProducts(API)
  return (
    <section className='main-container'>
      <div className='ProductList'>
        {
          products.map(item => (
            <ProductItem
              key={item.id}
              product={item}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ProductList
