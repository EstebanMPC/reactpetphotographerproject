import { div } from 'prelude-ls';
import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import {  Form, Input  } from 'reactstrap';


class ContactMe extends Component {
    render() {
        return(
           <div>
               <div id="contactme">
                    <div className="col-md-12">
                        <h1 className="servicestitle hd-br ">Contact Me</h1>
                    </div>

                    <div className="head pb-5">
                        <div className="container py-5">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="sub-ttl text-dark pb-3">How may I help you?</h2>
                                    <div className="row">
                                        <div className="col-lg-6 mt-3">
                                            <div className="row ">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 pb-3 contactimg">
                                                    <img class="contactimg" src=".//images/welcomeimg.jpeg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <Form >
                                                <div className="form-row">
                                                    <div className="FormGroup col-lg-6 col-md-12 col-12 mt-3">
                                                        <Input type="text" className="form-control" placeholder="First Name" />
                                                    </div>
                                                    <div className="FormGroup col-lg-6 col-md-12 col-12 mt-3">
                                                        <Input type="text" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <Input type="email" placeholder="Email" className="form-control mt-3" />

                                                <div className="btn-group btn-group-toggle pt-3" data-toggle="buttons">
                                                    <label className="btn btn btn-outline-primary active">
                                                        <Input type="radio" name="options" id="instudio" autocomplete="off" checked /> In-Studio
                                                    </label>
                                                    <label className="btn btn-outline-primary">
                                                        <Input type="radio" name="options" id="remote" autocomplete="off" /> Remote
                                                    </label>
                                                    <label className="btn btn-outline-primary">
                                                        <Input type="radio" name="options" id="classNamees" autocomplete="off" /> classNamees
                                                    </label>
                                                </div>

                                                <textarea className="form-control mt-3" placeholder="Message" cols="30" rows="8"></textarea>
                                                <div className="pt-3">
                                                    <Input type="checkbox" /> <label> I'm not a robot</label> <button className="btn btn-primary float-right">Send
                                                        Message</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container text-white fter">
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-4 col-sm-2 offset-1">
                                <ul className="list-unstyled ">
                                    <li>
                                        <Link to="/" className="text-decoration-none text-white">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-decoration-none text-white">My Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-decoration-none text-white">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-decoration-none text-white">Contact</Link>
                                    </li>
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
                                <ul className="list-unstyled ">
                                <li>
                                    <Link to="/">    
                                        <i className="fa fa-phone fa-lg text-white mx-2 "></i> <span className="text-white">1-206-555-1234</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">    
                                        <i className="fa fa-envelope fa-lg text-white mx-2 text-decoration-none"></i><span className="text-white"> contact@jamesavery.com</span>
                                    </Link>
                                </li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default ContactMe;