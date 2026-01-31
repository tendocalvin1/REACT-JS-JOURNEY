

function ProductCard({title, price}){
    return(
        <div className="container">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    )
}

export default ProductCard;