import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Resume extends Component {
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

                <h1><b>Resume</b></h1>
                <h3><b>Summary of Qualifications:</b></h3>
                <p>More than 15 years experience in the US Army as a Human Resources Specialist</p>
                <p>Coached, trained, and evaluated the performance of 20 Human Resources personnel</p>
                <p>Experienced in preparing and maintaining personnel files on an automated data processing system</p>
                <p>Held Top Secret with Sensitive Compartmented Information as a Human Resources Specialist</p>
                <p>More than 15 years experience working as armed and unarmed security</p>

                <h3><b>Skills:</b></h3>                     
                <text>Computer Languages:</text><p>JavaScript, HTML, CSS, Python, React, SQL</p>
                <h3><b>Education and Training:</b></h3>
                <p>Currently studying at Bottega Web Developement and Coding Academy</p>
                <p>Credit recommendation (22 hours) from the American Council of Education</p>

           
                <div className="footer">
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

export default Resume;