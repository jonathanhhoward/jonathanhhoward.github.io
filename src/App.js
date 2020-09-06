import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Showcase from './components/Showcase';
import Profiles from './Profiles';
import './App.scss';

window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar--shadow');
  } else {
    navbar.classList.remove('navbar--shadow');
  }
};

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route path="/showcase">
            <Showcase/>
          </Route>
          <Route path="/profiles">
            <Profiles/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
