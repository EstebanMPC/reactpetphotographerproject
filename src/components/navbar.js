import { div } from 'prelude-ls';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav id="home" className="navbar navbar-expand-lg navbar-dark bg-dark static-top ">
                <a className="ttl-br navbar-brand "> J. Avery </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class=" navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link" href="index.html">
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link" href="gallery.html">    
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link">    
                                My Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactme" className="nav-link">    
                                Contact Me
                            </Link>
                        </li>
                        <div class="rainbow">
                            <li class="d-inline-block btn nav-item">
                                <Link to="/" className="nav-link">    
                                    <i className="fa fa-facebook-square"></i>
                                </Link>
                                
                            </li>
                            <li class="d-inline-block btn nav-item">
                                <Link to="/" className="nav-link">    
                                    <i className="fa fa-instagram"></i>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav> 
        </div>
    )
}

export default Navbar