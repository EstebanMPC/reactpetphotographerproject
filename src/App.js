import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import SlidingCards from './components/slidingcards';
import FirstReview from './components/review1';
import ReviewFooter from './components/reviewfooter';
import ContactMe from './components/contactme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Hero />
                <SlidingCards />
                <FirstReview />
                <ReviewFooter />
              </Route>
              <Route exact path='/contactme'>
                <ContactMe />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
