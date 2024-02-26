// App.jsx
import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';
import { ThemeProvider, useTheme } from './Components/ThemeContext';


const App = () => {
  const { darkMode } = useTheme(); 
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <ThemeProvider>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
     
    <Contact />
        </ThemeProvider>
       
      </div>
    
  );
};

export default App;
