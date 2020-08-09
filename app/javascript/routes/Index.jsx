import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import Create from "../components/Create";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movements" exact component={Recipes} />
      <Route path="/movement/:id" exact component = {Recipe}/>
      <Route path="/create" exact component = {Create}/>
    </Switch>
  </Router>
);