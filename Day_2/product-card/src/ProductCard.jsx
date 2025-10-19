import './ProductCard.css'

function ProductCard({ name, price, image, inStock }) {
    return (
        <div className={`product-card ${inStock ? 'Instock' : 'Out of stock'}`}>
            <div className="product-image">
                <img src={image} alt={`${name} image`} />
            </div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            {inStock && <div className="in-stock">In Stock</div>}
            {!inStock && <div className="out-of-stock">Out of Stock</div>}
        </div>
    )
}

export default ProductCard;