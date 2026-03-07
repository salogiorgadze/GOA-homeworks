import React from "react";

function SecondThemePresentational({ theme }) {
  const style = {
    backgroundColor: theme === "white" ? "white" : "black",
    color: theme === "white" ? "black" : "white",
    padding: "20px",
    margin: "10px"
  }

  return (
    <div style={style}>
      <h2>Sec component</h2>
      <p>Theme is:{theme}</p>
    </div>
  )
}

export default SecondThemePresentational