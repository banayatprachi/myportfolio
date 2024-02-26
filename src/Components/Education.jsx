import React from 'react';
import { FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import './Edu.css'

const EducationItem = ({ title, degree, completionYear }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className={`education-item mb-8 p-6 rounded-lg bg-[rgb(163,109,199)] shadow-md flex flex-col sm:flex-row items-center justify-between cursor-pointer`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4 sm:mb-0">
        <FiBook className={`text-[rgb(138,75,175)] text-4xl sm:text-5xl md:text-6xl mr-4`} />
        <div>
          <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-black'}`}>Degree: {degree}</p>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-black'}`}>Year of Completion: {completionYear}</p>
        </div>
      </div>
      <div className={`text-[rgb(138,75,175)] ${darkMode ? 'text-white' : 'text-black'}`}>
        <span className="text-4xl sm:text-5xl md:text-6xl">🎓</span>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { darkMode } = useTheme();

  return (
    <div>
      <section id="education" className={`py-10 ${darkMode ? 'bg-black text-white' : 'bg-[rgb(240, 239, 245)]'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl sm:text-4xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Education</h2>

          <EducationItem title="G H Raisoni College of Engineering Nagpur" degree="B.Tech (E&T)" completionYear="2024" />
          <EducationItem title="Christanand Jr. College Bramhapuri" degree="H.S.C" completionYear="2020" />
          <EducationItem title="Christanand School Bramhapuri" degree="S.S.C" completionYear="2018" />
        </div>
      </section>
    </div>
  );
};

export default Education;
