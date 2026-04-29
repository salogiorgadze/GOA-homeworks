import { Link } from "react-router"
import { products } from "../database/data"
const Products = () => {
  return(
    <div>
      <h1>Products</h1>
      {
        products.map(p => (
          <div key={p.id}>
            <h1>{p.name}</h1>
            <img src={p.image} alt="" />
            <p>{p.price}</p>
            <Link to={`/product/${p.id}`}>
              <button>see details</button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
export default Products;