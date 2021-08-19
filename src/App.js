import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './views/Hero';
import About from './views/About';
import Project from './views/Project';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import NewsLetter from './components/NewSletter';
import Portfolio from './views/Portfolio';


function App() {

  return (
    <div className="app">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Portfolio">
            <Portfolio />
            <CallToAction />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Contact />
            <NewsLetter />
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
