import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="sidebar">
                    <nav>
                        <ul>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                <section className="hero">

                <h1>Heroku Projects</h1>
                {/* Replace the links with icons and with descriptions to link to the projects */}
                <a href="https://propertymanagement2.herokuapp.com/">
                    <img src="assets/images/property_management.png"/>                    
                </a>
                <p>This is my Property Management App which allows you to register and login to the site.</p>
                <br></br>
                <a href="https://scheduler-js-3.herokuapp.com/">
                    <img src="assets/images/course_scheduler.png"/>                                        
                </a>
                <p>This is my Course Scheduler App that lets you pick from a list of classes to enroll in.</p>
                <br></br>
                <a href="https://stark-garden-23131.herokuapp.com/">
                    <img src="assets/images/stark_garden.png"/>                    
                </a>
                <p>This is my Stark Garden App that allows you to login with a new email.</p>
                <br></br>
                <h3>Run the next two apps together.</h3>

                <a href="https://kn-python-side-app.herokuapp.com/">
                    <img src="assets/images/side.png"/>
                </a>
                <p>This is my Side App which needs to be ran at the same time as my Frontend App.</p>
                <br></br>
                <a href="https://kn-python-frontend.herokuapp.com/">
                    <img src="assets/images/frontend.png"/>
                </a>
                <p>This is my Frontend App which needs to be ran at the same time as my Side App, this app allows you to add movies and rate them.</p>
                </section>
                <div class="footer">
                    <footer>
                        <ul>
                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i>
                                <p>100</p>
                            </a></li>
                            <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i>
                                <p>100</p>
                            </a></li>
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i>
                                <p>100</p>
                            </a></li>

                        </ul>
                    </footer>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Projects;