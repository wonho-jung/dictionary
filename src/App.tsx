import React from "react";
import "./App.css";
import Home from "./Routers/FunctionHome/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./Routers/Favorite/Favorite";
import Login from "./Routers/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
