import { useEffect, useState } from "react"
import Parent from "./components/Parent"
import { DataContext } from "./context/DataContext";

function App(){
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])
  return(

    <DataContext.Provider value={products}>
      <Parent/>
    </DataContext.Provider>
  )
}
export default App



/* 1) შექმენით 4 კომპონენტი Parent, Child, Grandchild, Greatgrandchild, Parent - იძახებს Child - ს, Child - იძახებს Grandchild - ს, Grandchild - კი Greatgrandchild - ს, App.jsx - ის ფაილში შექმენით მდგომარეობა სახელად products თქვენი დავალებაა, რომ fakestoreapi - ზე fetch - ით გააგზავნოთ მოთხოვნა, დაბრუნებული მონაცემები კი შეინახოთ მდგომარეობაში, მოცემული მდგომარეობის მნიშვნელობა გადაეცით DataContext.Provider value attribute - ს (უნდა შექმნათ Context App - ში სახელად DataContext), შემდეგ კი Greatgrandchild - კომპონენტში შესაბამისი კაუჭის გამოყენებით ამოიღეთ products მდგომარეობის მნიშვნელობა და საიტზე თითოეული პროდუქტის ინფორმაცია დაა - render - ეთ, აგრეთვე ახსენით კომენტარების სახით თუ რა არის Context - რაში ვიყენებთ ჩვენ მას, რა განსხვავებაა props drilling - სა და Context - ს შორის
*/