import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './views/hero/Hero';
import About from './views/about_section/About';
import Project from './views/project_section/Project';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Contact from './components/contact/Contact';
import PortfolioDetail from './views/portfolio/PortfolioDetail';
import Portfolio from './views/portfolio/Portfolio';
import PROJECTS from './data';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio projects={PROJECTS} />
          </Route>
          < Route exact path="/portfolio/:id" component={PortfolioDetail} />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Hero />
            <About />
            <Project PROJECTS={PROJECTS} />
          </Route>
        </Switch>
        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
