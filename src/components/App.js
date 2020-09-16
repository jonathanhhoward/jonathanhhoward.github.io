import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Showcase from "./Showcase";
import Profiles from "./Profiles";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/showcase">
          <Showcase />
        </Route>
        <Route path="/profiles">
          <Profiles />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
