import { Link } from "react-router";
import { products } from "../database/products";
const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt="" />
          <p>{product.price} $</p>

          <Link to={`/product/${product.id}`}>
            <button>see details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products