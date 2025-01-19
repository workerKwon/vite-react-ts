import React from "react";
import "./app.css";

function App(props: { children: React.ReactNode }) {
  return <h1 className="App">{props.children}</h1>;
}

export default App;
