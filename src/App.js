import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CursorOverlay from "./components/CursorOverlay";
// import { motion, useScroll } from "framer-motion";


import { ThemeContext } from "./context";
import Photography from "./components/Photography";
// import Experience from "./components/experience";

const App = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Destroy the current effect before creating a new one
    if (vantaEffect) vantaEffect.destroy();

    // Initialize Vanta.js effect after the component mounts
    const newVantaEffect = darkMode
      ? window.VANTA.FOG({
          el: "#body",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x0,
          midtoneColor: 0xffffff,
          lowlightColor: 0xededed,
          baseColor: 0x152c56,
          blurFactor: 0.79,
          speed: 1.6,
          zoom: 0.9,
        })
      : window.VANTA.FOG({
          el: "#body",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xffffff,
          midtoneColor: 0x73bbf2,
          lowlightColor: 0xd4d4d4,
          baseColor: 0xffffff,
          speed: 2.9,
          zoom: 2.7,
        });

    // Set the new effect in the state
    setVantaEffect(newVantaEffect);

    // Clean up the effect when the component unmounts
    return () => {
      if (newVantaEffect) newVantaEffect.destroy();
    };
  }, [darkMode]); // Update effect when darkMode changes

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      {/* Vanta.js will be applied to this element */}
      <div id="body" className="bg-white">

        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
        </Helmet>

        
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services/>
        <Work />
        {/* <Experience/> */}
        <Photography/>
        <Contact />
        <CursorOverlay />
      </div>
    </div>
  );
};

export default App;
