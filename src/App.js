import './App.css';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Companies from './components/Companies.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
import PortFolio from './components/PortFolio.jsx'
import Footer from './components/Footer.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div className='p-[20px]'>
      {/*Navbar*/}
      <Navbar />
      {/*Home*/}
      <Home />
      {/*About*/}
      <About />
      {/*Skills*/}
      <Skills />
      {/*portfolio*/}
      <PortFolio />
      {/*contact*/}
      <Contact />
      {/*footer*/}
      <Footer />
    </div>
  );
}

export default App;
