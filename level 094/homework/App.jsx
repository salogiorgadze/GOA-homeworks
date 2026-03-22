import Login from "./pages/Login"
import useTheme from "./hooks/useTheme"
import ToggleText from "./components/toggleText"
function App() {
    const {handleClick,theme} = useTheme()
  return(
    <div style={{backgroundColor:theme}}>
    <Login/>
    <button onClick={handleClick}>submit</button>
    <ToggleText/>
    </div>

  )

}
export default App

