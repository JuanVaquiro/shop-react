import { useState } from 'react'

const initialState = {
  cart: []
}

function useInitialState () {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_, items) =>
        items !== indexValue
      )
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState
