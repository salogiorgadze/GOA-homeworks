import Parent from "./components/Parent"
import { ColorContext } from "./contexts/ColorContext"

function App() {
  return(
    <>
      <ColorContext.Provider value={{color:'pink',backgroundColor:'yellow'}}>
        <Parent/>
      </ColorContext.Provider>
    </>
  )
}
export default App

