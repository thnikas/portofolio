import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ParticlesCom } from "./config/Particles";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <ParticlesCom/>

          <Navbar/>
          <Hero />
        </div>
        <div className="overviewC">
          <About/>
        </div>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;