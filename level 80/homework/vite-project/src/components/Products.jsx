import Product from "./Product"
function Products({products}){
    return (
        <>
            <h1>Products</h1>
            {
                products.map((p) => {
                    <Product p={p}/>
                })
            }
        </>
    )
}
export default Products