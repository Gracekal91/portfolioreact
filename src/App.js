import Navbar from './components/Navbar'
import Hero from './views/Hero';
import Skills from './views/Skills';
import About from './views/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
