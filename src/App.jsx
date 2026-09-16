import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { ParticlesCom } from "./config/Particles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen bg-primary p-4 sm:p-6">
        <div className="relative isolate bg-primary  p-2">
          <ParticlesCom />

          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative isolate">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
