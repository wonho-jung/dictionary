import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Routers/FunctionHome/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./Routers/Favorite/Favorite";
import Login from "./Routers/Login/Login";
import { auth } from "./firebase";
interface User {
  displayName?: string | null;
  email?: string | null;
  uid?: string | null;
}

function App() {
  const [user, setUser] = useState<User>({
    displayName: null,
    email: null,
    uid: null,
  });

  let str = "asdfasdf";
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locatorasdfasdfasdf
    return !!pattern.test(str);
  }
  validURL(str);
  console.log(validURL);
  console.log(validURL);
  console.log(validURL);
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
  const userStateCallBack = (arg: any) => {
    setUser({
      displayName: arg,
      email: arg,
      uid: arg,
    });
  };
  var validUrl = require("valid-url");

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
            <Home user={user} userCallback={userStateCallBack} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
