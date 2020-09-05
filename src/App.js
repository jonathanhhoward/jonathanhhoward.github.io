import React from 'react';
import './App.scss';

function App() {
  return (
      <div>
        <header>
          <nav className="navbar">
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#profiles">Profiles</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="home">
            <div className="title">
              <img src="images/profile-selfie.jpg" alt="profile selfie"/>
              <h1>Jonathan Howard</h1>
              <p>Software Developer</p>
            </div>
          </section>
          <section id="projects">
            <h2 className="section-header">Projects</h2>
            <div className="project">
              <a href="https://jonathanhhoward.github.io/survey-form">
                <figure className="tile float">
                  <img src="images/survey-form.png"
                       alt="icon for survey-form"/>
                  <figcaption className="caption">
                    Survey Form
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/technical-documentation-page">
                <figure className="tile">
                  <img src="images/technical-documentation-page.png"
                       alt="icon for technical-documentation-page"/>
                  <figcaption className="caption">
                    Technical Document Page
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/product-landing-page/">
                <figure className="tile">
                  <img src="images/product-landing-page.png"
                       alt="icon for product-landing-page"/>
                  <figcaption className="caption">
                    Product Landing Page
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/markdown-previewer">
                <figure className="tile">
                  <img src="images/markdown-previewer.png"
                       alt="icon for markdown-previewer"/>
                  <figcaption className="caption">
                    Markdown Previewer
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/javascript-calculator">
                <figure className="tile">
                  <img src="images/javascript-calculator.png"
                       alt="icon for javascript-calculator"/>
                  <figcaption className="caption">
                    JavaScript Calculator
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/pomodoro-clock">
                <figure className="tile">
                  <img src="images/pomodoro-clock.png"
                       alt="icon for pomodoro-clock"/>
                  <figcaption className="caption">
                    Pomodoro Clock
                  </figcaption>
                </figure>
              </a>
              <a href="https://jonathanhhoward.github.io/bar-chart">
                <figure className="tile">
                  <img src="images/bar-chart.png"
                       alt="icon for bar-chart"/>
                  <figcaption className="caption">
                    Bar Chart
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-exercisetracker.glitch.me">
                <figure className="tile">
                  <img src="images/exercise-tracker.png"
                       alt="icon for exercise-tracker"/>
                  <figcaption className="caption">
                    Exercise Tracker
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-filemetadata.glitch.me">
                <figure className="tile">
                  <img src="images/file-metadata.png"
                       alt="icon for file-metadata"/>
                  <figcaption className="caption">
                    File Metadata Microservice
                  </figcaption>
                </figure>
              </a>
              <a href="https://jhhoward-metricimpconverter.glitch.me">
                <figure className="tile">
                  <img src="images/metric-imp-converter.png"
                       alt="icon for metric-imp-converter"/>
                  <figcaption className="caption">
                    Metric-Imperial Converter
                  </figcaption>
                </figure>
              </a>
              <a href="https://github.com/jonathanhhoward/clock">
                <figure className="tile">
                  <img src="images/analog-clock.png"
                       alt="icon for analog-clock"/>
                  <figcaption className="caption">
                    Analog Clock
                  </figcaption>
                </figure>
              </a>
            </div>
          </section>
          <section id="profiles">
            <div className="profile">
              <h2 className="section-header">Profiles</h2>
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
          </section>
        </main>
      </div>
  );
}

export default App;
