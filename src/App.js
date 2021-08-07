import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import SlidingCards from './components/slidingcards';
import FirstReview from './components/review1';
import ReviewFooter from './components/reviewfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <Hero />
        <SlidingCards />
        <FirstReview />
        <ReviewFooter />
      </Router>
    </>
  );
}

export default App;
