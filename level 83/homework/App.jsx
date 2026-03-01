import { useEffect,useState } from "react"
function App() {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err))
  },[])

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id))
  }
  return(
    products.map(product => {
      return(
        <div key={product.id}>
          <h3>{product.title}</h3>
          <h2>{product.description}</h2>
          <img src={product.image} alt="" width={300}/>
          <h2>{product.price}</h2>
          <button onClick={() => handleDelete(product.id)}>delete</button>
        </div>
      )
    })
  )
}



export default App
