import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Hero from './views/hero/Hero';
import About from './views/about_section/About';
import Project from './views/project_section/Project';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Contact from './components/contact/Contact';
import NewsLetter from './components/NewSletter';
import Portfolio from './views/portfolio/Portfolio';


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
