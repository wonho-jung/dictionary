import React from "react";
import "./Sidebar.scss";
import StarIcon from "@material-ui/icons/Star";
import SidebarOption from "./SidebarOption/SidebarOption";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const Sidebar = ({ user }) => {
  let { path, url } = useRouteMatch();
  console.log(user);
  console.log(path, url);
  return (
    <div className="sidebarContainer">
      <div className="sidebar__head">
        <Link to="/">
          <h3>Won's dictionary</h3>
        </Link>
      </div>
      <div className="sidebar__user">
        <h3>Welcome {user.displayName}</h3>
      </div>
      <div className="sidebar__channel">
        {" "}
        <SidebarOption title={"My word"} Icon={StarIcon} link={user.uid} />
        <SidebarOption title={"Word test"} Icon={MenuBookIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
