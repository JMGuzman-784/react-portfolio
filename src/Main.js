import React from "react";
import headShot from "./images/headshot_2.jpg";
import PwGen from "./images/PWGen.png";
import WorkDay from "./images/Work_day_scheduler.png";
import Weather from "./images/weatherdashpicture.png";
import Umbrella from "./images/Need_anumbrella.png";
import Resume from "./Resume_JMGuzman_TC (1).pdf";


const Main = () => {
    return (
        <div>
        <div className="header">
          <h2>
          <a><code>&#60; Jose Guzman | Portfolio &#62;</code></a>
          </h2>
        </div>
        
        <div className="navbarr navbar-no-space-between">
        
         <a className="navBtns" href="https://github.com/JMGuzman-784/portfolio" target="_blank">Home</a>
                                
         <a className="navBtns" href={Resume} download>My Resume</a>
                                
         <a className="navBtns" href="#projects_section">Projects</a>
                                
         <a className="navBtns" href="https://jmguzman-784.github.io/contactme/" target="_blank">Contact Me</a>
                                
        </div>
        
        <div className="row">
            <div className="side pad-3">
                <h2>&#60; HELLO AGAIN! &#62;</h2>
        
                <img className="" style={{height: '200px'}} src={headShot} alt=""/>
                
                <p>
                Hello and welcome to my page! There have been a few improvements to my portfolio this year thanks to my “Contact Me” page. I hope you enjoy the new look as you navigate through my website. Download my resume on the navigation bar, check out some of my recent projects, and scroll down to reach me on LinkedIn or view my Github pages.
                </p>
                
            </div>
          
            <div className="main">
                <h2>What I love to do</h2>
                <div className="video-responsive">
                  <iframe className="" src="https://www.youtube.com/embed/cB-IuJuc80Q?start=10" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <p>This video above is just to show what I love to do.</p>
                
                
                
                <h2>Sole/Synergy Projects</h2>
                <p>Below you will be able to navigate through projects that I worked on as a team.
                    Feel free to click the image to visit the actual webpage!
                </p>
                
                <div id="projects_section" className="">
        
                    <div className="imgsizes">
                        <a href="https://jmguzman-784.github.io/hw3/" target="_blank">  
                      <img src={PwGen} style={{width: '100%'}} alt="Password_Gen"/>
                        </a>
                      <div className="titleCards">
                        
                        <h2>Password Generator</h2>
                        
                        <a className="navBtns" href="https://github.com/JMGuzman-784/hw3" target="_blank">Visit the Github Page here.</a>
                      </div>
                    </div>
                    
                    <div className="imgsizes">
                        <a href="https://jmguzman-784.github.io/hw5/" target="_blank">
                      <img src={WorkDay} style={{width: '100%'}} alt="Work_scheduler"/>
                        </a>
                      <div className="titleCards">
                        
                        <h2>Work Day Scheduler</h2>
                        
                        <a className="navBtns" href="https://github.com/JMGuzman-784/hw5" target="_blank">Visit the Github Page here.</a>
                      </div>
                    </div>
                    
                    <div className="imgsizes">
                        <a href="https://jmguzman-784.github.io/hw6/" target="_blank">
                      <img src={Weather} style={{width: '100%'}} alt="Weather_Dashboard"/>
                        </a>
                      <div className="titleCards">
                        
                        <h2>Weather Dashboard</h2>
                        
                        <a className="navBtns" href="https://github.com/JMGuzman-784/hw6" target="_blank">Visit the Github Page here.</a>
                      </div>
                    </div>
                    
                    <div className="imgsizes">
                        <a href="https://the-camelcasers.github.io/project/" target="_blank">
                      <img src={Umbrella} style={{width: '100%'}} alt="Umbrella_gif_app"/>
                        </a>
                      <div className="titleCards">
                        
                        <h2>Need an Umbrella?</h2>
                        
                        <a className="navBtns" href="https://github.com/The-camelCasers/project" target="_blank">Visit the Github Page here.</a>
                      </div>
                    </div>
                
                    </div>
            </div>
        </div>
        
        
        
        <footer className="footer row row-cols-1 g-4 bg-dark">
        
                <div className="col">
                  <div className="card border-light text-white bg-dark mb-3 me-3" >
                    <div className="card-header border-light font-weight-bold">Linkedin</div>
                    <div className="card-body text-dark">
                      <h5 className="card-title text-white">Linkedin Profile</h5>
                      <p className="card-text">Click the button to visit my Linkedin Profile</p>
                      <a href="https://www.linkedin.com/in/guzmanjose86/" className="link bob-on-hover" target="_blank">View Profile</a>
                    </div>
                  </div>
                </div>
        
                <div className="col">
                  <div className="card border-light text-white bg-dark mb-3 me-3" >
                    <div className="card-header border-light">Github Pages</div>
                    <div className="card-body text-dark">
                      <h5 className="card-title text-white">Visit Github</h5>
                      <p className="card-text">Click the button to visit my Github Pages</p>
                      <a href="https://github.com/JMGuzman-784" className="link bob-on-hover" target="_blank">Github</a>
                    </div>
                  </div>
                </div>
        
            </footer>
            </div>
            )
}

export default Main