import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaGithub,FaBootstrap,FaVuejs,FaLaravel,FaSymfony,FaUbuntu  , FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiExpress,SiNestjs ,SiJira  } from 'react-icons/si';
import {RiNextjsFill } from 'react-icons/ri'
function App() {
  const [activePage, setActivePage] = useState('home');
  const projects = [
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    },
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    },
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    },
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    },
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    },
    {
      name:"Service de communication instantané",
      description:"Concevoir et développer un service de chat performant, évolutif et sécurisé, avec une architecture client-serveur et un service IAM pour la gestion des identités.",
      image:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
      github:'https://github.com/hissoune/Service_de_Communication_Backend.git'
    }
  ]
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="min-h-screen bg-darkGreen text-white text-center flex flex-col justify-center items-center px-6"
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://i.pinimg.com/236x/58/94/28/589428fe3cc9319a686ed3767eb7ea5c.jpg" // Add your photo here
                alt="Khalid Hissoune"
                className="rounded-full w-24 h-24 object-cover mr-4"
              />
              <motion.h1
                className="text-4xl font-semibold text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I&apos;m Khalid Hissoune
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg max-w-3xl mx-auto mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A passionate full-stack web developer focused on creating meaningful digital experiences.
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">CORE SKILLS</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                {[
                  { icon: FaHtml5, label: 'HTML5' },
                  { icon: FaCss3Alt, label: 'CSS3' },
                  { icon: FaJs, label: 'JavaScript' },
                  { icon: FaReact, label: 'React' },
                  { icon: FaNodeJs, label: 'Node.js' },
                  { icon: SiMongodb, label: 'MongoDB' },
                  { icon: FaDocker, label: 'Docker' },
                  { icon: FaGitAlt, label: 'Git' },
                  { icon: SiTailwindcss, label: 'Tailwind CSS' },
                  { icon: SiTypescript, label: 'TypeScript' },
                  { icon: FaPython, label: 'Python' },
                  { icon: SiPostgresql, label: 'PostgreSQL' },
                  { icon: FaGithub, label: 'GitHub' },
                  { icon: SiExpress, label: 'Express.js' },
                  { icon: FaBootstrap, label: 'Bootstrap' },
                  { icon: FaVuejs, label: 'VueJs' },
                  { icon: RiNextjsFill, label: 'NextJs' },
                  { icon: FaLaravel, label: 'Laravel' },
                  { icon: FaSymfony , label: 'Symfony' },
                  { icon: SiNestjs , label: 'NestJS' },
                  { icon: FaUbuntu , label: 'ubuntu' },
                  { icon: SiJira , label: 'Jira ' },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-darkGray border border-gray-700 p-4 rounded-md shadow-sm hover:shadow-lg transition-all transform hover:scale-105"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <div className="text-4xl text-green-500 mb-2">
                      <skill.icon />
                    </div>
                    <p className="text-center text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
  {skill.label}
</p>                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
            <h2 className="text-2xl font-semibold mb-4">ÉXPERIENCE</h2>
           <motion.div>
            <div className="text-center bg-darkGray border border-gray-700 p-4 rounded-md shadow-sm hover:shadow-lg transition-all transform hover:scale-105">
            Full-Stack Web Development - Intern at Ecowatt 2024 (2 months)

Projects

Reservation and Payment Platform: A specialized tool for the solar energy sector. (Laravel - ReactJs)
E-Shop: A consultation and installation service platform for solar energy projects, showcasing completed projects and their locations.
              </div>
           </motion.div>


            </motion.div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="min-h-screen bg-darkGreen text-white py-20 text-center "
          >
          
            <motion.h2
              className="text-4xl font-semibold mb-6 text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 px-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className=" rounded-lg shadow-md flex justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div class="w-sm">
                      <img class="w-64" src={project.image} alt="" />
                      <div class="mt-4 text-green-600 text-center">
                        <h1 class="text-xl font-bold">{project.name}</h1>
                        <p class="mt-4 text-gray-600">{project.description}</p>
                        <a href={project.github} className="w-80   "><FaGithub  /></a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="min-h-screen bg-darkGreen text-white py-20 text-center"
          >
            <motion.h2
              className="text-4xl font-semibold mb-6 text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Me
            </motion.h2>
            <form className="max-w-md mx-auto bg-darkGray p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-700 rounded-md focus:ring focus:ring-green-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-700 rounded-md focus:ring focus:ring-green-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  placeholder="Write your message"
                  className="w-full p-3 border border-gray-700 rounded-md focus:ring focus:ring-green-200"
                ></textarea>
              </div>
              <button type="submit" className="w-full p-3 bg-green-600 text-white font-semibold rounded-md">
                Send Message
              </button>
            </form>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <header className="bg-darkGray p-6">
        <nav className="flex justify-between items-center">
          <motion.div
            className="text-xl font-semibold text-green-500 cursor-pointer"
            onClick={() => setActivePage('home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Khalid Hissoune
          </motion.div>
          <div className="flex space-x-6">
            <motion.div
              className="text-lg cursor-pointer hover:text-green-500"
              onClick={() => setActivePage('projects')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Projects
            </motion.div>
            <motion.div
              className="text-lg cursor-pointer hover:text-green-500"
              onClick={() => setActivePage('contact')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Contact
            </motion.div>
          </div>
        </nav>
      </header>
      {renderContent()}
    </div>
  );
}

export default App;
