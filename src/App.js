import Navbar from './components/Navbar'
import Hero from './views/Hero';
import About from './views/About';
import Project from './views/Project';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/contact">
            <Contact />
            <CallToAction />
            <Footer />
          </Route>
          <Route exact path="/">
            <Hero />
            <About />
            <Project />
            <CallToAction />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
