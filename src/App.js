import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Profiles from "./components/Profiles";
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
