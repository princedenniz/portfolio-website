import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Project from "./components/Project";
import Skills from "./components/Skills";
// import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
