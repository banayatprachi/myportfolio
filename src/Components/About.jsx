// About.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { darkMode } = useTheme();
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Web Developer'],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'RESUMMMME.pdf';
    link.download = 'Prachi_Banayat_Resume.pdf';
    link.target = '_blank'; // Open in a new tab
    link.rel = 'noopener noreferrer';
  
    
    link.addEventListener('load', () => {
 
      window.open(link.href, '_blank');
    });
  
    document.body.appendChild(link); 
    link.click(); 
  };
  

    return (
      <motion.section
      key="aboutSection"
      className={`about ${darkMode ? 'dark-mode' : 'light-mode'}`}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: darkMode ? '#000' : '#fff', // Background color for dark and light mode
        color: darkMode ? '#fff' : '#333', // Text color for dark and light mode
      }}
    >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
          <motion.h2
            className="text-4xl font-bold  pt-40 mb-6 text-center uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About me
            <span className="content-['Who am I'] text-gray-600 text-lg font-normal"></span>
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="w-full sm:w-2/5 mb-6 sm:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.img
              src={darkMode ? 'phoyu.jpg' : 'photuu.jpg'}
              alt="Profile"
              className="w-400 h-400 pr-20 object-cover mb-4 sm:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            </motion.div>
            <motion.div
              className="w-full sm:w-3/5 mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className={`text text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-400'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I'm Prachi Banayat and I'm a{' '}
                <motion.span
                  ref={typedRef}
                  className="bg-sliding-text-about text-[rgb(175,122,197)]"
                  data-text="Full Stack Web Developer"
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                ></motion.span>
              </motion.div>
              <motion.p
                className="text-justify mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                I am a 3rd year student, currently pursuing B-tech in electronics and telecommunication at
                G H Raisoni College of Engineering Nagpur. I'm aiming to become a Full Stack Web Developer.
                I am also looking forward to learning Java for my upcoming projects. I am excited to acquire
                new skills and put them into practice. I am a detail-oriented person, and I believe in
                perfecting my skills.
              </motion.p>
              <motion.button
                onClick={handleDownload}
                className={`inline-block bg-[rgb(138,75,175)] text-white text-lg font-semibold px-6 py-3 mt-4 border-2 border-[rgb(138,75,175)] rounded-full transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
  
};

export default About;
