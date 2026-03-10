import { useEffect,useState } from "react"

function App() {
  const [input,setInput] = useState('');
  const [coins,setCoins] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${input}`)
      .then(res => res.json())
      .then(data => setCoins(data.coins))
      .catch(err => console.log('error:', err))
  },[input])
console.log(coins)
  return(
    <div>
      <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)} value={input}/>
      {
        coins.map((coin,index) => {
          return(
            <div key={index}>
              <h1>{coin.name}</h1>
              <h2>{coin.symbol}</h2>
              <img src={coin.thumb} alt="" />
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default App
