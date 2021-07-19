import React from "react";
import "./App.css";
import Home from "./Routers/FunctionHome/Home";
import HomeContainer from "./Routers/Home";

function App() {
  return (
    <div className="App">
      <a href="http://won9dev.com/">take you my site</a>
      {/* <HomeContainer /> */}
      <Home />
    </div>
  );
}

export default App;
