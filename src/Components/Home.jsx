import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { useTheme } from './ThemeContext';
import './Home.scss';

const Home = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const options = {
      strings: ['Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.typing', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className={`home min-h-screen pb-20 flex items-center justify-center ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
      style={{
        backgroundImage: darkMode ? 'url("bg2.png")' : 'url("bg2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        paddingBottom: '200px',
      }}
    >
      <div className="max-width">
        <div className="home-content text-center">
          <div className="text-3xl text-gray-100 pl-6 md:pl-96 pt-6 md:pt-96 border-blacks">
            Hello, I am Prachi
          </div>
          <div
            className={`text-3 text-3xl pl-6 md:pl-96 ${
              darkMode ? 'text-white' : 'text-white'
            }`}
          >
            And I'm a <span className="typing text-[rgb(175,122,197)] text-6xl"></span>
          </div>
          <a
            href="https://www.linkedin.com/in/prachi-banayat-56b0b926a/"
            className={`hire-button ${
              darkMode ? 'bg-[rgb(138,75,175)]' : 'bg-[rgb(138,75,175)]'
            } text-white px-6 py-3 ml-auto rounded-full mt-6 mb-6 inline-block text-xl transition-all duration-300 hover:bg-[rgb(203,59,216)] hover:text-white text-right`}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
