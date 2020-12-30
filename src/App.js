import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Industries from './components/Industries';
import Certifications from './components/Certifications';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/what-we-do'>
            <WhatWeDo />
          </Route>
          <Route exact path='/industries'>
            <Industries />
          </Route>
          <Route exact path='/certifications'>
            <Certifications />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
