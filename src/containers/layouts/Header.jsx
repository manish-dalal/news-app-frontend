import React from "react";
import { withRouter } from "react-router-dom";

import getImage from "utils/images";

const Header = props => {
  const moveToHome = () => {
    props.history.push("/");
  };

  return (
    <div className="Header center">
      <img
        src={getImage("logo")}
        alt="logo"
        className="Header_logo"
        onClick={moveToHome}
      />
      <div className="search-wrapper center"></div>
    </div>
  );
};
export default withRouter(props => <Header {...props} />);
