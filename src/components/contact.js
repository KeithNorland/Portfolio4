import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contact extends Component {
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
                <div className="form">
                    <div className="form-group">
                        <input type="text" id="FullName" placeholder="Your name" />
                        <label for="FullName">Your name</label>
                    </div>

                    <div className="form-group">
                        <input type="email" id="Email" placeholder="Your email" />
                        <label for="Email">Your email</label>
                    </div>

                    <div className="form-group">
                        <textarea name="message" id="Message" placeholder="Message"></textarea>
                        <label for="Message">Message</label>
                    </div>

                    <div className="spacer10"></div>
                    <div className="center-btn2-wrapper">
                        <button type="submit" class="btn">Send</button>
                    </div>
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

export default Contact;