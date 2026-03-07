import { useEffect,useState } from "react"
function App() {
  const [products,setProducts] = useState([]);
  const [editProduct,setEditProduct] = useState(null);
  const [formData,setFormData] = useState({
    title:'',
    price:'',
    description:''
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log('error: ',err))
  },[]);

  const handleEdit = (product) => {
    setEditProduct(product.id);

    setFormData({
      title: product.title,
      price: product.price,
      description: product.description
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setProducts(prev =>
      prev.map(p =>
        p.id === editProduct
          ? { ...p, ...formData }
          : p
      )
    );

    setEditProduct(null);
  };

  return(
    <div>

      {editProduct && (
        <div>
          <h2>Edit Product</h2>

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <br /><br />
          <button onClick={handleUpdate}>Save</button>
          <hr />
        </div>
      )}

      {
        products.map(p => {
          return(
            <div key={p.id}>
              <h1>{p.title}</h1>
              <h2><i>{p.price}</i></h2>
              <p>{p.description}</p>
              <h2>{p.category}</h2>
              <img src={p.image} alt="" width={300}/>
              <br /><br />

              <button onClick={() => handleEdit(p)}>
                Update
              </button>

              <hr />
            </div>
          )
        })
      }

    </div>
  )
}



export default App