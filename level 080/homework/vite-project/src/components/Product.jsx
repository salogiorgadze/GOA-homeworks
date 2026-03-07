function Product({product,handleAdd}){
    return(
        <div>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <img src={product.image} alt="" width={300} />
            <h4><i>{product.price}</i></h4>
            <button onClick={handleAdd}>add to cart</button>
        </div>
    )

}
export default Product