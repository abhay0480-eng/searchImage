import "./styles.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage.component";
import Canvas from "./components/pages/canvas.component";

function SearchImageApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route path="/canvas" component={Canvas} />
      </Switch>
    </div>
  );
}
export default SearchImageApp;
