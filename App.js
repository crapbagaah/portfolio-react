import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;