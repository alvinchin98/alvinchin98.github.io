import './App.css';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import Contact from './PortfolioContainer/ContactMe/Contact'
import Experience from './PortfolioContainer/Experience/Experience'
import Testimonial from './PortfolioContainer/Testimonial/Testimonial'
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import Portfolio2 from './PortfolioContainer/Portfolio2/Portfolio2';
import Footer from './PortfolioContainer/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Experience />
     {/* <Portfolio/> */}
     <Portfolio2/>
     {/* <Testimonial /> */}
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
