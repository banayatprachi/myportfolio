import React from 'react';
import './Skills.css';  
import { useTheme } from './ThemeContext';

const Certificate = ({ title, imageSrc }) => {
  return (
      <div className="card">
          <div className="box">
              <img src={imageSrc} alt={title} />
              <div className="text">{title}</div>
          </div>
      </div>
  );
};

const Certificates = () => {

    const { darkMode } = useTheme();
  
  const certificatesData = [
      { title: 'HTML', imageSrc: 'html.png' },
      { title: 'CSS', imageSrc: 'css.webp' },
      { title: 'Javascript', imageSrc: 'jsc.jpeg' },
      { title: 'C++', imageSrc: 'c++.png' },
      { title: 'Tailwind', imageSrc: 'tailwind.png' },
       { title: 'React.js', imageSrc: 'react.png' },
      { title: 'C', imageSrc: 'C.jpg' },
      { title: 'DSA', imageSrc: 'dsa.png' },
     
  ];

  return (
    <div className={`Certificates ${darkMode ? 'dark-mode' : 'light-mode'}`} id='skills'>
    <div className="title text-4xl font-bold ">Skills</div>
    <div className="carousel">
      <div className="grid-container">
        {certificatesData.map((certificate, index) => (
          <Certificate
            key={index}
            title={certificate.title}
            imageSrc={certificate.imageSrc}
            darkMode={darkMode}
          />
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Certificates;
