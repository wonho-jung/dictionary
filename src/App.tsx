import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Routers/FunctionHome/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./Routers/Favorite/Favorite";
import Login from "./Routers/Login/Login";
import { auth } from "./firebase";

interface User {
  displayName: string | null;
  email: string | null;
  uid: string;
}

function App() {
  const [user, setUser] = useState<User>({
    displayName: "",
    email: "",
    uid: "",
  });
  console.log(auth);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        console.log(user.displayName, user.email, user.uid);
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      }
    });
  }, []);
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/favorite">
            <Favorite user={user} />
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
