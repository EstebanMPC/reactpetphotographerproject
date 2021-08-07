import { div } from 'prelude-ls';
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div id="intro" className="view">
            <div className="mask container-fluid d-flex align-items-center justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="hd-in display-3 white-text mb-2">James Avery</h2>
                        <hr className="hr" />
                        <h5 className="sub-int white-text my-4">
                            Pet Photographer
                        </h5>
                        <h5>
                            🐶 ✌️
                        </h5>
                        <Link to="/" className="btn btn-outline-dark text-white" role="button" aria-pressed="true">    
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero