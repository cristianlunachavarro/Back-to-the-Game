import React from "react";
import LoginContainer from '../containers/LoginContainer'
import ProductsContainer from "../containers/ProductsContainer"
import RegisterContainer from "../containers/RegisterContainer"
import { Switch, Route, Redirect } from "react-router-dom";

export default () => (
  <div id="main" className="container-fluid">
    <Switch>
      <Route path='/products' component={ProductsContainer}/>
      <Route path="/users/register" component={RegisterContainer} />
      <Route path="/users/login" component={LoginContainer} />
      <Route path='/products/:id' component={SingleProductContainer}/>
      <Redirect to="/"></Redirect>
    </Switch>
  </div>
);