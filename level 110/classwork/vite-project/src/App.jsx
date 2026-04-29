import { Route, Routes } from "react-router"
import Products from "./pages/Products"
import Product from "./pages/Product"


function App() {
  return(
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  )
}

export default App
