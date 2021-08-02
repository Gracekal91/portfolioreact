import Navbar from './components/Navbar'
import Hero from './views/Hero';
import About from './views/About';
import Project from './views/Project';
import Footer from './components/Footer';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Footer />
      </Router>
    </div>

  );
}

export default App;
