import Login from "./pages/Login"
import useTheme from "./hooks/useTheme"
function App() {
    const {handleClick,theme} = useTheme()
  return(
    <div style={{backgroundColor:theme}}>
    <Login/>
    <button onClick={handleClick}>submit</button>
    </div>

  )

}
export default App
