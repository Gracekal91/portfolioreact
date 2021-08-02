import Navbar from './components/Navbar'
import Hero from './views/Hero';
import About from './views/About';
import Project from './views/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
