import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutIntro from "./components/Intro/AboutIntro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutIntro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
