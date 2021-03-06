import "./styles.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage/SearchPage.component";
import Canvas from "./components/pages/CanvasPage/canvas.component";

function SearchImageApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/canvas" component={Canvas} />
      </Switch>
    </div>
  );
}

export default SearchImageApp;
