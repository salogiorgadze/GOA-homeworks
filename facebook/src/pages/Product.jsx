import { useParams } from "react-router";
import { products } from "../database/products";

const Product = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>Price: {product.price}$</p>
    </div>
  )
}

export default Product