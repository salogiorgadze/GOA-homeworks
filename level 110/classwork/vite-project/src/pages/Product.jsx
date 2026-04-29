import { useParams } from "react-router"
import { products } from "../database/data"

const Product = () => {
    const {id} = useParams()
    const product = products.find((p) => p.id == Number(id))

    if (!product){
        return <p>product not found</p>
    }
    return(
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}
export default Product;