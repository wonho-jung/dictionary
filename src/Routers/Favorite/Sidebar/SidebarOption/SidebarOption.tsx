import React from "react";
import "./SidebarOption.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
interface Props {
  title: string;
  Icon: any;
  link?: string;
}
const SidebarOption: React.FC<Props> = ({ title, Icon, link }) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="sidebarOption">
      {link ? (
        <Link to={`${url}/${link}`}>
          <div className="sidebarOption__channelName">
            <Icon fontSize="small" />
            <h3>{title}</h3>
          </div>
        </Link>
      ) : (
        <div className="sidebarOption__channelName">
          <Icon fontSize="small" />
          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};

export default SidebarOption;
