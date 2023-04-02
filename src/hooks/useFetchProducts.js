import { useState, useEffect } from 'react'

const useFetchProducts = (API) => {
  const [products, setProducts] = useState([])

  const datataGET = async () => {
    const respo = await fetch(API)
    const data = await respo.json()
    setProducts(data)
  }

  useEffect(() => {
    datataGET()
  }, [])

  return (
    products
  )
}

export default useFetchProducts
