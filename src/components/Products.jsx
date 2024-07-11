import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const Products = ({ user }) => {

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddtoCart = (id) => {
    const data = products.filter(item => item.id === id);
    setCartProducts((prev) => [...prev, data]);
    navigate('/cart')
  }

  return (
    <div>
      <div className='products'>
        {
          products?.length ? products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.images[0]}
              title={item.title}
              price={item.price}
              rating={item.rating}
              category={item.category}
              handleAddtoCart={handleAddtoCart}
            />
          )) : <div></div>
        }
      </div>
      {
        user && <Cart />
      }
    </div>
  )
}

export default Products