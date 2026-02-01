

function ProductCard1({name, price}){
    return(
        <div className="card">
            <h3>{name}</h3>
            <p>{price}</p>
            <button style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}>Purchase</button>
        </div>
    )
}

export default ProductCard1;