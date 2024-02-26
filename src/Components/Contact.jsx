// Contact.jsx
import React from 'react';
import { FaSun, FaMoon, FaArrowUp } from 'react-icons/fa';
import { FiUser, FiMapPin, FiMail } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const Contact = () => {
  const { darkMode, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={`contact ${darkMode ? 'dark-mode' : 'light-mode'}`} id="contact" style={{ backgroundColor: darkMode ? '#000' : '#fff' }}>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-8 text-center">
        <h2 className={`text-4xl mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          <strong>Contact</strong>
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
          <div className={`w-full sm:w-1/2 mb-4 sm:mb-0 text-left ${darkMode ? 'text-white' : 'text-black'}`}>
            <strong className="text-3xl mb-4">Get in Touch</strong>
            <p className="text-lg">
              Adding value to you and your company would make me <br />happy.
              Regarding projects, internships, and full-time<br /> employment, kindly get in touch.
            </p>
            <div className="text-lg mt-6">
              <div className="flex items-center mb-4 space-x-4">
                <FiUser className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Name:</strong> Prachi Banayat
              </div>
              <div className="flex items-center mb-4">
                <FiMapPin className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Address:</strong> Nagpur, Maharashtra
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Email:</strong> banayatprachi@gmail.com
              </div>
              <div className="flex items-center mt-4">
                <button
                  onClick={scrollToTop}
                  className={`text-[rgb(138,75,175)] py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center`}
                >
                  <FaArrowUp className="mr-2" />
                </button>
                <button
                  className={`bg-transparent border-none outline-none ml-4 ${darkMode ? 'text-white' : 'text-black'}`}
                  onClick={toggleTheme}
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-500" />
                  ) : (
                    <FaMoon className="text-yellow-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 ${darkMode ? 'text-white' : 'text-black'}`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Message Me</h3>
          <form
            action="https://formspree.io/f/mgegkjlv"
            method="POST"
            className="flex flex-col items-center sm:items-start"
          >
              <label htmlFor="name" className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className={`bg-white border-2 border-gray-300 p-3 rounded-md mb-4 w-full ${darkMode ? 'text-black' : 'text-black'}`}
              />

              <label htmlFor="email" className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                className={`bg-white border-2 border-gray-300 p-3 rounded-md mb-4 w-full ${darkMode ? 'text-black' : 'text-black'}`}
              />

              <label htmlFor="message" className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Message:</label>
              <textarea
                name="message"
                id="message"
                className={`bg-white border-2 border-gray-300 p-3 rounded-md mb-4 h-24 w-full ${darkMode ? 'text-black' : 'text-black'}`}
              ></textarea>

              <button
                type="submit"
                className={`bg-[rgb(138,75,175)] text-white py-3 px-8 rounded-md hover:bg-white hover:text-[rgb(138,75,175)] border border-[rgb(138,75,175)] transition-all duration-300`}
              >
                Send Message
              </button>
            </form>
          </div>
         
        
        </div>
      
      </div>


      <footer className={`bg-black text-white p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
        <span>
          Created By{' '}
          <a href="#" className="text hover:underline">
            Prachi Banayat
          </a>
        </span>
      </footer>
    </section>
  );
};

export default Contact;
