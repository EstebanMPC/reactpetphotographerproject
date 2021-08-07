import { div } from 'prelude-ls';
import React from 'react';
import { Link } from 'react-router-dom';

function ReviewFooter() {
    return (
        <div id="close2" className="view">
            <div className="mask container-fluid ">
                <div>
                    <div className="d-flex flex-column align-items-end reviewr">
                        <div className="col-sm-4 text-center ">
                            <h2 className="hd-br br2 display-3 font-volt  mb-2">Review</h2>
                        </div>
                        <h5 className="col-sm-4 sub-ttl my-4">
                            "James was fantastic! We asked if he could take pictures of my husband on a paddleboard. We put together a small boat for James to get him out in the
                            open. He ended up taking amazing
                            pictures for us! We hired a photographer and made a life-long friend! It could have not
                            been a better
                            experience!"
                        </h5>
                        <div className="sub-ttl col-sm-4 text-center ">
                            <h5>- Hernandez family</h5>
                        </div>
                    </div>
                </div>

                <div className="container text-white fter">
                    <hr className="hr" />
                    <div className="row">
                        <div className="col-4 col-sm-2 offset-1">
                            <ul className="list-unstyled ">
                                <Link to="/" className="text-decoration-none text-white">Home</Link>
                                <Link to="/" className="text-decoration-none text-white">My Services</Link>
                                <Link to="/" className="text-decoration-none text-white">Gallery</Link>
                                <Link to="/" className="text-decoration-none text-white">Contact</Link>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-5 text-center ">
                                <Link to="/">    
                                    <i className="fa fa-instagram fa-2x mt-2"></i>
                                </Link>
                                <Link to="/">    
                                    <i className="fa fa-facebook fa-2x mx-2"></i>
                                </Link>
                                <Link to="/">    
                                    <i className="fa fa-twitter fa-2x mx-2"></i>
                                </Link>
                                <Link to="/">    
                                    <i className="fa fa-youtube fa-2x"></i>
                                </Link>
                        </div>
                        <div className="col-sm-4 ">
                                <Link to="/">    
                                    <i className="fa fa-phone fa-lg text-white mx-2">1-206-555-1234</i>
                                </Link>
                                <Link to="/">    
                                    <i className="fa fa-envelope fa-lg text-white mx-2">contact@jamesavery.com</i>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewFooter