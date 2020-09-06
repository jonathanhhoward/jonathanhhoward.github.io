import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.scss';
import surveyForm from './images/survey-form.png';
import technicalDocumentationPage from './images/technical-documentation-page.png';
import productLandingPage from './images/product-landing-page.png';
import markdownPreviewer from './images/markdown-previewer.png';
import javascriptCalculator from './images/javascript-calculator.png';
import pomodoroClock from './images/pomodoro-clock.png';
import barChart from './images/bar-chart.png';
import exerciseTracker from './images/exercise-tracker.png';
import fileMetadata from './images/file-metadata.png';
import metricImpConverter from './images/metric-imp-converter.png';
import analogClock from './images/analog-clock.png';

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
          <Route path="/projects">
            <div className="project">
              <a href="https://jonathanhhoward.github.io/survey-form">
                <figure className="tile float">
                  <img src={surveyForm}
                       alt="icon for survey-form"/>
                  <figcaption className="caption">
                    Survey Form
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/technical-documentation-page">
                <figure className="tile">
                  <img src={technicalDocumentationPage}
                       alt="icon for technical-documentation-page"/>
                  <figcaption className="caption">
                    Technical Document Page
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/product-landing-page/">
                <figure className="tile">
                  <img src={productLandingPage}
                       alt="icon for product-landing-page"/>
                  <figcaption className="caption">
                    Product Landing Page
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/markdown-previewer">
                <figure className="tile">
                  <img src={markdownPreviewer}
                       alt="icon for markdown-previewer"/>
                  <figcaption className="caption">
                    Markdown Previewer
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/javascript-calculator">
                <figure className="tile">
                  <img src={javascriptCalculator}
                       alt="icon for javascript-calculator"/>
                  <figcaption className="caption">
                    JavaScript Calculator
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/pomodoro-clock">
                <figure className="tile">
                  <img src={pomodoroClock}
                       alt="icon for pomodoro-clock"/>
                  <figcaption className="caption">
                    Pomodoro Clock
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/bar-chart">
                <figure className="tile">
                  <img src={barChart}
                       alt="icon for bar-chart"/>
                  <figcaption className="caption">
                    Bar Chart
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-exercisetracker.glitch.me">
                <figure className="tile">
                  <img src={exerciseTracker}
                       alt="icon for exercise-tracker"/>
                  <figcaption className="caption">
                    Exercise Tracker
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-filemetadata.glitch.me">
                <figure className="tile">
                  <img src={fileMetadata}
                       alt="icon for file-metadata"/>
                  <figcaption className="caption">
                    File Metadata Microservice
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-metricimpconverter.glitch.me">
                <figure className="tile">
                  <img src={metricImpConverter}
                       alt="icon for metric-imp-converter"/>
                  <figcaption className="caption">
                    Metric-Imperial Converter
                  </figcaption>
                </figure>
              </a>
              <a href="https://github.com/jonathanhhoward/clock">
                <figure className="tile">
                  <img src={analogClock}
                       alt="icon for analog-clock"/>
                  <figcaption className="caption">
                    Analog Clock
                  </figcaption>
                </figure>
              </a>
            </div>
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
