import ButtonGradient from "./assets/svg/ButtonGradient";
import Education from "./components/Education";
import Expertises from "./components/Expertises";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projects from "./components/Projects";

import Mailer from "./components/Mailer"
import Experience from "./components/Experience";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Experience />
        <Projects />
        <Education />
        <Expertises />
       <Mailer/>
    
  
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
