import React from "react";
import isEmpty from "lodash/isEmpty";
import { Redirect } from "react-router-dom";

import ItemCard from "components/ItemCard";

export default function DetailPage(props) {
  if (isEmpty(props.location.state)) {
    return <Redirect to="/" />;
  }
  return (
    <div className="Home">
      <div className="center Home_body_container">
        <ItemCard item={props.location.state} />
      </div>
    </div>
  );
}
