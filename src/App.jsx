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
            className=""
          >
            <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-indigo-900 text-white text-center flex flex-col justify-center items-center px-6 relative overflow-y-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-10 animate-pulse"></div>
              <h1 className="text-7xl font-extrabold mb-4 animate-text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Hi, I&apos;m Khalid Hissoune
              </h1>
              <p className="text-2xl max-w-4xl mx-auto mb-8">
                A futuristic web developer passionate about crafting innovative digital solutions. Welcome to my portfolio, where creativity meets technology.
              </p>
              <img
                src="/profile-photo.jpg"
                alt="Profile"
                className="rounded-full shadow-2xl mb-10 w-48 h-48 hover:scale-105 transition-transform"
              />
              <a
                href="#journey"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Explore My Journey
              </a>
            </div>

            <div
              id="journey"
              className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-purple-900 text-white py-20 px-6 flex flex-col items-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 pointer-events-none"></div>
              <h2 className="text-6xl font-bold text-center mb-10 animate-fade-in">My Journey</h2>
              <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                {[{
                  year: '2020',
                  milestone: 'Started learning web development',
                  details: 'Began with HTML, CSS, and JavaScript, building simple projects and understanding the fundamentals.',
                },
                {
                  year: '2022',
                  milestone: 'Internship at Ecowatt',
                  details: 'Worked on complex applications like eShop and ABC-Solution, mastering React and Node.js.',
                },
                {
                  year: '2024',
                  milestone: 'Building Advanced Applications',
                  details: 'Developing scalable apps using Docker, MongoDB, and JWT-based authentication.',
                }].map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all w-full md:w-1/3 relative hover:shadow-2xl"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-green-400 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                      {event.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 mt-6">{event.milestone}</h4>
                    <p className="text-gray-300">{event.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-20 pointer-events-none"></div>
              <h2 className="text-6xl font-bold text-center mb-12 animate-fade-in">My Skills</h2>
              <div className="flex flex-wrap justify-center gap-12">
                {[{ icon: DiHtml5, label: 'HTML5' },
                  { icon: DiCss3, label: 'CSS3' },
                  { icon: DiJavascript1, label: 'JavaScript' },
                  { icon: DiReact, label: 'React' },
                  { icon: DiNodejs, label: 'Node.js' },
                  { icon: DiMongodb, label: 'MongoDB' },
                  { icon: DiGit, label: 'Git' },
                  { icon: DiDocker, label: 'Docker' }].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-gray-800 p-8 rounded-lg shadow-xl hover:bg-gray-700 transition-all hover:shadow-2xl relative"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4">
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="py-20 bg-gradient-to-b from-gray-900 via-black to-purple-900 text-white relative overflow-hidden h-screen flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 pointer-events-none"></div>
              <h2 className="text-6xl font-bold text-center mb-12 animate-fade-in">My Projects</h2>
              <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto px-6">
                {[
                  { name: 'Cinema Management App', link: 'https://github.com/hissoune/cinema-management' },
                  { name: 'Quiz Master', link: 'https://github.com/hissoune/quiz-master' },
                  { name: 'E-Shop', link: 'https://github.com/hissoune/e-shop' },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all relative hover:shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-green-400 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                    <h4 className="text-2xl font-semibold mb-4">{project.name}</h4>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="text-center py-10"
          >
            <h1 className="text-5xl font-bold mb-6">My Resume</h1>
            <p className="text-xl mb-4 max-w-xl mx-auto">
              Download my resume to explore my professional journey and technical expertise.
            </p>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>
      );
  }
};

return (
  <div className="font-sans  min-h-screen flex flex-col">
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white  px-8 fixed w-full z-50 shadow-lg py-4">
      <ul className="flex justify-center space-x-8">
        {[
          { label: 'Home', icon: FaHome, key: 'home' },
          { label: 'Projects', icon: FaProjectDiagram, key: 'projects' },
          { label: 'Resume', icon: FaFileAlt, key: 'resume' },
        ].map((navItem) => (
          <li key={navItem.key}>
            <button
              onClick={() => setActivePage(navItem.key)}
              className={`flex items-center space-x-2 text-lg font-semibold transition-all transform ${
                activePage === navItem.key
                  ? 'text-yellow-400 scale-105'
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <navItem.icon size={24} />
              <span>{navItem.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>

    <main className=" flex-grow">{renderContent()}</main>
  </div>
);
}

export default App;

