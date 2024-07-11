import { useNavigate } from 'react-router-dom'

const ProductCard = ({ id, title, category, price, rating, image, handleAddtoCart }) => {

    const navigate = useNavigate();

    return (
        <div className='product-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className='details'>
                <p>Rating:{' '}<strong>{rating}</strong></p>
                <p>Category:{' '}<strong>{category}</strong></p>
            </div>
            <p className='price'>$ {price}</p>
            <button onClick={() => {
                handleAddtoCart(id);
            }}
            >Add to Cart</button>
        </div>
    )
}

export default ProductCard