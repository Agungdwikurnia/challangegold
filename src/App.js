import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Services from './components/Services';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Hero/>
      <NavBar/>
      <Gallery/>
    </div>
  );
}

export default App;
