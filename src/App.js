import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Showcase from './components/Showcase';
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
            <div className="profile">
              <div className="profile">
                <a href="https://github.com/jonathanhhoward"
                   className="button">
                  GitHub
                </a>
                <a href="https://www.freecodecamp.org/jonathanhoward"
                   className="button">
                  freeCodeCamp
                </a>
                <a href="https://linkedin.com/in/jonathanhhoward"
                   className="button">
                  LinkedIn
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
