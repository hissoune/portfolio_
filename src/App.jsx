import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiDocker } from 'react-icons/di';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-800 to-black opacity-10 animate-pulse text-white text-center flex flex-col justify-center items-center px-6 relative overflow-y-hidden">
              <div className="absolute top-0 left-0 w-full h-full "></div>
              <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Hi, I&apos;m Khalid Hissoune
              </h1>
              <p className="text-2xl max-w-4xl mx-auto mb-8">
                A futuristic web developer passionate about crafting innovative digital solutions. Welcome to my portfolio.
              </p>
              <img
                src="/profile-photo.jpg"
                alt="Profile"
                className="rounded-full shadow-2xl mb-10 w-48 h-48 hover:scale-105 transition-transform"
              />
              <a
                href="#journey"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Explore My Journey
              </a>
            </div>

            <div id="journey" className="min-h-screen text-white py-20 px-6">
              <h2 className="text-6xl font-bold mb-10 animate-fade-in">My Journey</h2>
              <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                {[
                  { year: '2020', milestone: 'Started learning web development', details: 'HTML, CSS, and JavaScript' },
                  { year: '2022', milestone: 'Internship at Ecowatt', details: 'React and Node.js experience' },
                  { year: '2024', milestone: 'Building Advanced Applications', details: 'Docker, MongoDB, JWT auth' }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 p-8 rounded-xl shadow-xl text-center"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                      {event.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 mt-6">{event.milestone}</h4>
                    <p className="text-gray-300">{event.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="min-h-screen  text-white py-20 relative">
              <h2 className="text-6xl font-bold text-center mb-12 animate-fade-in">My Skills</h2>
              <div className="flex flex-wrap justify-center gap-12">
                {[
                  { icon: DiHtml5, label: 'HTML5' },
                  { icon: DiCss3, label: 'CSS3' },
                  { icon: DiJavascript1, label: 'JavaScript' },
                  { icon: DiReact, label: 'React' },
                  { icon: DiNodejs, label: 'Node.js' },
                  { icon: DiMongodb, label: 'MongoDB' },
                  { icon: DiGit, label: 'Git' },
                  { icon: DiDocker, label: 'Docker' }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-gray-800 p-8 rounded-lg shadow-xl hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4">
                      <skill.icon size={50} className="text-white" />
                    </div>
                    <p className="text-lg font-semibold">{skill.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            key="projects"
            className="py-20  text-white relative overflow-hidden"
          >
            <h2 className="text-6xl font-bold mb-12 animate-fade-in text-center">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto px-6">
              {[
                { name: 'Cinema Management App', link: 'https://github.com/hissoune/cinema-management' },
                { name: 'Quiz Master', link: 'https://github.com/hissoune/quiz-master' },
                { name: 'E-Shop', link: 'https://github.com/hissoune/e-shop' }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-2xl font-semibold mb-4">{project.name}</h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full"
                  >
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'resume':
        return (
          <motion.div
            key="resume"
            className="text-center py-10"
          >
            <h1 className="text-5xl font-bold mb-6">My Resume</h1>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-full shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>
        );
    }
  };

  return (
    <div className="  font-sans min-h-screen flex flex-col" style={{
      backgroundImage: 'url("https://i.pinimg.com/736x/97/04/a3/9704a3edf038940e01dae3d438eb71f0.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <nav className="bg-gray-900 text-white px-8 fixed w-full z-50 shadow-lg py-4">
        <ul className="flex justify-center space-x-8">
          {[
            { label: 'Home', icon: FaHome, key: 'home' },
            { label: 'Projects', icon: FaProjectDiagram, key: 'projects' },
            { label: 'Resume', icon: FaFileAlt, key: 'resume' }
          ].map((navItem) => (
            <li key={navItem.key}>
              <button
                onClick={() => setActivePage(navItem.key)}
                className={`flex items-center space-x-2 text-lg font-semibold transition-all transform ${
                  activePage === navItem.key
                    ? 'text-blue-400 scale-105'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                <navItem.icon size={24} />
                <span>{navItem.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-grow">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
