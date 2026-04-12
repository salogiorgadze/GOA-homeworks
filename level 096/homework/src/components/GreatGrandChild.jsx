import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const GreatGrandChild = () => {
    const products = useContext(DataContext)
    return(
        <div>
            <h1>Great Grand Child</h1>
            {products.map(product => (
        <div key={product.id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
          <h3>{product.title}</h3>
          <p>{product.price} $</p>
          <p>{product.description}</p>
        </div>
      ))}
        </div>
    )
}
export default GreatGrandChild