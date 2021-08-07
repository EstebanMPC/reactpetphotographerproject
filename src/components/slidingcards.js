import { div } from 'prelude-ls';
import React from 'react';
import { Link } from 'react-router-dom';

function SlidingCards () {
    return(
        <React.Fragment>
            <div class="ctnr">
                <div className="pl pl-1 active">
                    <h3>Donnie</h3>
                </div>
                <div className="pl pl-2">
                    <h3>Janice & Joplin</h3>
                </div>
                <div className="pl pl-3">
                    <h3>Mr. Piffles</h3>
                </div>
                <div className="pl pl-4">
                    <h3>Lechuga</h3>
                </div>
                <div className="pl pl-5">
                    <h3>Jazz</h3>
                </div>
            </div>
            
            <div className="gbtn col-md-12 text-center">
                <h4 class="sub-ttl text-dark">Check out more pictures in my gallery</h4>
                <Link to="/" className="btn btn-outline-secondary my-4" role="button" aria-pressed="true">    
                    Gallery
                </Link>
            </div>
        </React.Fragment>
    );
}

const panels = document.querySelectorAll('.pl')

        panels.forEach((pl) => {
            pl.addEventListener('click', () => {
                removeActiveClasses()
                pl.classList.add('active')
            })
        })

        function removeActiveClasses() {
            panels.forEach(pl => {
                pl.classList.remove('active')
            })
        }

export default SlidingCards

