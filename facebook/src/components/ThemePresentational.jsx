import React from "react";

function ThemePresentational({theme, handleClick}) {
  const style = {
    backgroundColor: theme === "white" ? "white" : "black",
    color: theme === "white" ? "black" : "white",
    padding: "20px",
    margin: "10px"
  }

  return (
    <div style={style}>
      <h2>hhello</h2>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ThemePresentational