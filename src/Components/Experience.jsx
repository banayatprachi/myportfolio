import React from 'react';
import { useTheme } from './ThemeContext'; 
import './Experience.css';

const Experience = () => {
  const { darkMode } = useTheme(); 

  const experiences = [
    {
      company: 'Qloron Technologies',
      position: 'Software Developer Intern',
      description: 'Currently I am working at Qloron as a MERN stack developer Intern',
    },
    {
      company: 'TXON',
      position: 'Web Developer Intern',
      description: 'I completed my 1 month web development internship at TXON. I learned many new things during the internship and worked on various technologies.',
    },
    {
      company: 'Radha Budhisiya Sanstha',
      position: 'NGO Internship',
      description: 'I worked as a volunteer at Radha sanstha which empowers and helps women and children.',
    },
  ];

  return (
    <div className={`Experience ${darkMode ? 'dark-mode' : ''}`}>
      <section id="experience">
        <h2 className="title">Experience</h2>
        <div className="grid-container">
          {experiences.map((experience, index) => (
            <div key={index} className="grid-item">
              <div className="content">
                <span>{experience.company}</span>
                <h3>{experience.position}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
