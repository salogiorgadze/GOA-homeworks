import { useState } from "react";

function ThemeContainer() {
  const [theme, setTheme] = useState("white");

  const handleClick = () => {
    setTheme(theme === "white" ? "black" : "white");
  }
  const ThemePresentational = ({ theme, handleClick }) => {
    const style = {
      backgroundColor: theme === "white" ? "white" : "black",
      color: theme === "white" ? "black" : "white",
      padding: "20px",
      margin: "10px"
    }
    return (
      <div style={style}>
        <button onClick={handleClick}>Change Theme</button>
      </div>
    )
  }
  const SecondThemePresentational = ({ theme }) => {
    const style = {
      backgroundColor: theme === "white" ? "white" : "black",
      color: theme === "white" ? "black" : "white",
      padding: "20px",
      margin: "10px"
    }
    return (
      <div style={style}>
        <p>{theme}</p>
      </div>
    )
  }

  return (
    <div>
      <ThemePresentational theme={theme} handleClick={handleClick} />
      <SecondThemePresentational theme={theme} />
    </div>
  )
}

export default ThemeContainer