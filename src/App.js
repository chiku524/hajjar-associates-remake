import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
