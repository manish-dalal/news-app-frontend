import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getItems } from "redux/actions/getItem";

import Layout from "./layouts/Layout";
import Home from "./Home";
import DetailPage from "./DetailPage";

export default props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={DetailPage} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};
