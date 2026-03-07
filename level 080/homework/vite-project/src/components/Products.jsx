import Product from "./Product"
function Products({products,handleAdd}){
    return (
        <div>
            <h2>Products</h2>
            {
                products.map((product) => {
                    return(
                        <Product key={product.id} product={product} handleAdd={handleAdd}/>
                    )
                })
            }
        </div>
    )
}
export default Products