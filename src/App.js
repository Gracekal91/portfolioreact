import Navbar from './components/Navbar'
import Hero from './views/Hero';
import About from './views/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
