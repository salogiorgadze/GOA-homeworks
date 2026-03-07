import { useState } from "react";

// Stateles (presentational) - component doesnt contains state or any logic, it just return JSX elements and using only props
function CountPresentational({count, handleClick}) {
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

// Stateful (Container) - component contains only state, complex logic, etc but it doesn return JSX
function CountContainer() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  }

  return (
    <CountPresentational count={count} handleClick={handleClick} />
  )
}


export default CountContainer;