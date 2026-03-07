import appStyle from './App.module.css'

function App() {

  return(
    <div>
      <h1 className={appStyle.greet}>Hello World</h1>
      <h2 className={appStyle.greet}>Group 89</h2>
      <button id={appStyle.unique}>click me</button>
    </div>
  )
}

export default App


