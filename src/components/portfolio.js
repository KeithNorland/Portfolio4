import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Portfolio extends Component {
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
                <div className='profilePic2'>
            <img id="x" src="assets/images/profilePic2.jpg"/>            
            <text>About:</text>
        </div>
                <div className="hero-content">
                    <h1>Passionate<br></br>Junior Software Developer</h1>
                    <p>I'm a freelance Junior Software Developer based in Pleasant Grove, Utah. I have created several
                        projects successfully. I'm passionate about my work.</p>
                    <a className="action-btn" href="/contact">Hire me</a>
                </div>
            </section>
        </div>

        <div className="footer">
            <footer>
                <ul>
                    <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i>
                            <p></p>
                        </a>100</li>
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
      
    );
  }
}

export default Portfolio;