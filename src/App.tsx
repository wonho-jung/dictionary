import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Routers/FunctionHome/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./Routers/Favorite/Favorite";
import Login from "./Routers/Login/Login";
import { auth } from "./firebase";

interface User {
  displayName: string;
  email: string;
  uid: string;
}

function App() {
  const [user, setUser] = useState<User>({ display, email, uid });
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          userId: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      }
    });
  }, []);
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
