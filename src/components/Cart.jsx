import React, { useState } from 'react'

const Cart = () => {
  
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddtoCart = (id) => {
    const data = products.filter(item => item.id === id);
    setCartProducts((prev) => [...prev, data]);
    navigate('/cart')
  }
  
  return (
    <div className='cart'>
      <h2>Cart</h2>
      {
        cartProducts.map((item) => {
          <div>
            <img src={cartProducts.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        })
      }
    </div>
  )
}

export default Cart

// pranoti@crezvatic.com
// VR7jWAJXzjxrGaPs