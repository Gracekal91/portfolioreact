import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './views/hero/Hero';
import About from './views/about_section/About';
import Project from './views/project_section/Project';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Contact from './components/contact/Contact';
// import NewsLetter from './components/NewSletter';
import Portfolio from './views/portfolio/Portfolio';
import eyespeed from './images/eyespeedtech.png'
import samipay from './images/samipay.png'
import PortfolioDetail from './views/portfolio/PortfolioDetail';

const PROJECTS = [
  {
    id: 1,
    image: eyespeed,
    title: 'EYE SPEED TECHNOLOGY',
    tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
    link: "https://eyespeedtech.co.za",
    description: 'Hello this is the description'

  },
  {
    id: 2,
    image: samipay,
    title: 'SAMIPAY TECHNOLOGY',
    tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
    link: "https://eyespeedtech.co.za",
    description: 'Hello this is the description'
  },
  {
    id: 3,
    image: eyespeed,
    title: 'CMS',
    tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
    link: "https://eyespeedtech.co.za",
    description: 'Hello this is the description'
  }
]


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
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Hero />
            <About />
            <Project />
          </Route>
        </Switch>
        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
