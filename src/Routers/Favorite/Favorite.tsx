import React from "react";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import "./Favorite.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Home from "./Home/Home";
const Favorite = ({ user }) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="favoriteContainer">
      <Sidebar user={user} />
      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route path={`${path}/:${user.uid}`}>
          <Content />
        </Route>
      </Switch>
    </div>
  );
};

export default Favorite;
