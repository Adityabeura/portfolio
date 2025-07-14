import Navbar from "./components/Navbar"
import heroimage from "./assets/web.jpg"
import projecti from './assets/Screenshot 2025-07-10 233351.png'
import Marquee from "react-fast-marquee"
import {FaHtml5,FaCss3Alt,FaJsSquare, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss,SiReact} from 'react-icons/si'
import StarryBackground from "./components/StarryBackground"
import Bouncingarrow from "./components/Bouncingarrow"
import { motion } from "framer-motion"
import Loader from "./components/Loader"
import { useEffect, useState } from "react"
import project2 from './assets/Screenshot 2025-07-14 141832.png'
import chat from './assets/chat.png'
import movie from './assets/movie.png'
import { a } from "framer-motion/client"
import { FaDownload } from "react-icons/fa"
const App = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },1500)
    return()=> clearTimeout(timer)
  },[])
  return (
    <>
    {loading ? (
      <Loader/>
    ):(
    <div className="w-full min-h-screen">
      <StarryBackground starCount={150} />
      <Navbar />
      <section id="home" className="pt-20 px-10 text-white md:pt-40 pb-20">
           <motion.div 
           initial={{x:-100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}}
           className="pt-20 md:flex md:flex-col md:items-center px-4 md:px-70">
                <h1 className="text-3xl font-bold text-center pb-5 md:text-6xl">
                <span className="text-red-500">H</span>i, I'm Aditya.
                 </h1>
                 <p className="mt-2 text-lg text-center pb-5">
                      Frontend Developer focused on building responsive React apps with clean UI and smooth user experience.
                      I specialize in crafting intuitive user interfaces using modern frameworks like React and utility-first styling with Tailwind CSS.
                      Passionate about pixel-perfect layouts, accessibility, and performance optimization.

                 </p>
                 <div className="md:flex md:flex-row gap-10 md:pt-8">
                 <button className="w-full px-4 py-2 bg-gray-200 text-black rounded md:w-50 hover:scale-110 hover:bg-gray-900 hover:text-white duration-250 cursor-pointer">Resume<FaDownload className="inline px-1 w-5 h-5" />
</button>
                 <div className="flex justify-center gap-4 mt-5">
                   <a href="https://www.linkedin.com/in/adityabeura/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                   <svg className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                  </svg>
                   </a>

                  <a href="https://github.com/Adiii08" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                   <svg className="w-6 h-6 text-white hover:text-gray-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.73c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 2.5-.34 9.56 9.56 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.7 0 3.83-2.34 4.67-4.57 4.91.36.31.68.91.68 1.83v2.71c0 .27.16.59.67.49A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                   </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
       </section>
       <Bouncingarrow />
       <section id="about" className="pt-30 px-5 flex flex-col items-center gap-5 text-white">
  <h1 className="text-red-500 text-2xl font-bold text-center">About Me</h1>

  <motion.div
           initial={{x:-100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}} className="md:flex md:items-start md:gap-30">
    
    <img
      src={heroimage}
      alt="Aditya working on frontend projects"
      className="w-full max-w-[300px] h-auto rounded-2xl object-cover shadow-lg mx-auto md:mx-0"
    />

    
    <p className="text-lg mt-6 md:mt-0 md:max-w-[600px] leading-relaxed">
      I’m a passionate Frontend Developer currently pursuing B.Tech in Computer Science (2027 batch) at Siksha 'O' Anusandhan University.
      I specialize in building responsive, clean, and intuitive user interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS. I love turning ideas into real projects that people can use.
      <br /><br />
      🛠️ Projects I’ve built: Chefy – A React-based recipe web app where users can create and browse recipes.
      <br />
      🌱 Currently Learning: Full Stack Development (React + Node.js)<br />
      📌 Goals: Land a web dev internship, improve backend skills, and contribute to open-source<br />
      🤝 Let’s Connect: I’m always open to learning, collaboration, and new opportunities!
    </p>
    
  </motion.div>
  <div>
    <h2 className="text-red-500 text-2xl font-bold pt-5">Tech Stack</h2>
  </div>
  <Marquee autoFill pauseOnHover={true} speed={50} gradient={false} className="bg-black">
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
     <FaHtml5 className="text-orange-500 text-2xl" />
 HTML
    </div>
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
      <FaCss3Alt className="text-blue-500 text-xl" />
CSS
    </div>
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
      <FaJsSquare className="text-yellow-400 text-xl" />
Javascipt
    </div>
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
      <SiTailwindcss className="text-cyan-400 text-xl" />Tailwindcss
    </div>
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
      <SiReact className="text-cyan-400 text-xl" />
React.js
    </div>
    <div className="bg-black mx-15 my-1 flex p-2 font-bold text-2xl cursor-pointer text-white items-center">
      <FaNodeJs className="text-green-500 text-xl"/>
      
Node.js
    </div>
  </Marquee>
  <p className="text-lg leading-relaxed py-5">
  🌱 <span className=" bg-gray-500 text-sky-300 font-medium px-4 py-2 rounded-md shadow-sm">
    Currently Learning: Full Stack Development (React + Node.js)
  </span>
</p>
</section>
<section id="project">
  <motion.div 
   initial={{x:100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}}
  className="flex flex-col gap-5 px-10 md:px-30 pb-20">
  <h2 className="text-red-500 text-2xl text-center font-bold pt-20">My Work</h2>
  <p className="text-white text-center text-lg">Welcome to my digital workshop—where ideas turn into interactive experiences. From recipe-sharing platforms like Chefyy to responsive UI experiments, each project reflects my passion for clean design, accessible interfaces, and modern web technologies. Built with tools like React, Tailwind CSS, and deployed via Netlify/Vercel, these creations are more than code—they’re crafted to solve real problems and delight users.
</p>
</motion.div>
<h2 className="text-red-500 text-center font-bold text-2xl">My Projects</h2>
  <motion.div
   initial={{x:-100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}}
   className="grid grid-cols-1 md:grid-cols-4 gap-4 px-10 pt-10">
    <div onClick={()=>window.open("https://chefy-webb.vercel.app/")} className="flex flex-col gap-4 h-100 md:h-110 w-full bg-white rounded px-4 py-4 hover:scale-105 duration-200 hover:bg-slate-700 cursor-pointer hover:text-white">
      <div className=" w-full h-50 md:h-max rounded overflow-hidden shadow-xl">
        <img className="object-contain md:object-cover" src={projecti} alt="" />
      </div>
      <h2 className="text-black text-center text-xl font-bold">🍽️ Chefyy</h2>
      <p className="text-lg">Chefyy is a sleek, user-friendly platform where users can discover, share, and save recipes.
</p>
<h4 className="text-center font-bold">Tech used</h4>
<div className="flex gap-5 justify-center bg-black p-2 rounded-2xl cursor-pointer hover:scale-105 duration-200">
<FaJsSquare className="text-yellow-400 text-xl" />
<SiReact className="text-cyan-400 text-xl" />
<SiTailwindcss className="text-cyan-400 text-xl" />
</div>
    </div>
      <div className="flex flex-col gap-4 h-100 md:h-110 w-full bg-white rounded px-4 py-4 hover:scale-105 duration-200 hover:bg-slate-700 cursor-pointer hover:text-white">
      <div className=" w-full h-50 md:h-max rounded overflow-hidden shadow-xl">
        <img className="object-contain md:object-cover" src={project2} alt="" />
      </div>
      <h2 className="text-black text-center text-xl font-bold">🧑‍💻 Portfolio</h2>
      <p className="text-lg">Welcome to my digital portfolio—a curated showcase of the projects, tools, and ideas.</p>
<h4 className="text-center font-bold">Tech used</h4>
<div className="flex gap-5 justify-center bg-black p-2 rounded-2xl cursor-pointer hover:scale-105 duration-200">
<FaJsSquare className="text-yellow-400 text-xl" />
<SiReact className="text-cyan-400 text-xl" />
<SiTailwindcss className="text-cyan-400 text-xl" />
</div>
    </div>
     <div className="flex flex-col gap-4 h-100 md:h-110 w-full bg-white rounded px-4 py-4 hover:scale-105 duration-200 hover:bg-slate-700 cursor-pointer hover:text-white">
      <div className=" w-full h-50 md:h-max rounded overflow-hidden shadow-xl">
        <img className="object-contain md:object-cover" src={chat} alt="" />
      </div>
      <h2 className="text-black text-center text-xl font-bold">🤖 AI-Chatbot"Upcoming..."</h2>
      <p className="text-lg">Meet our AI-powered chatbot: a smart, conversational assistant designed to understand natural language.
</p>
<h4 className="text-center font-bold">Tech used</h4>
<div className="flex gap-5 justify-center bg-black p-2 rounded-2xl cursor-pointer hover:scale-105 duration-200">
<FaJsSquare className="text-yellow-400 text-xl" />
<SiReact className="text-cyan-400 text-xl" />
<SiTailwindcss className="text-cyan-400 text-xl" />
<FaNodeJs className="text-green-500 text-xl"/>
</div>
    </div>
     <div className="flex flex-col gap-4 h-100 md:h-110 w-full bg-white rounded px-4 py-4 hover:scale-105 duration-200 hover:bg-slate-700 cursor-pointer hover:text-white">
      <div className=" w-full h-50 md:h-max rounded overflow-hidden shadow-xl">
        <img className="object-contain md:object-cover" src={movie} alt="" />
      </div>
      <h2 className="text-black text-center text-xl font-bold">🎬 Movie app"Upcoming..."</h2>
      <p className="text-lg">Chefyy is a sleek, user-friendly platform where users can discover, share, and save recipes.
</p>
<h4 className="text-center font-bold">Tech used</h4>
<div className="flex gap-5 justify-center bg-black p-2 rounded-2xl cursor-pointer hover:scale-105 duration-200">
<FaJsSquare className="text-yellow-400 text-xl" />
<SiReact className="text-cyan-400 text-xl" />
<SiTailwindcss className="text-cyan-400 text-xl" />
<FaNodeJs className="text-green-500 text-xl"/>
</div>
    </div>
  </motion.div>
</section>

<section id="skills">
  <motion.div 
   initial={{x:100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}}
  className="flex flex-col gap-5 items-center py-20 px-10 md:px-40">
    <h2 className="text-red-500 font-bold text-3xl">Skills</h2>
    <p className="text-white text-center text-lg">From crafting responsive interfaces to deploying production-ready apps, my skill set reflects a balance of design precision and development agility. I specialize in React and Tailwind CSS, with a keen eye for accessibility and animation. Whether it's version control with GitHub, seamless deployment via Netlify/Vercel, or experimenting with tools like Vite, I’m always refining my workflow to build performant, user-friendly web experiences.
</p>
  </motion.div>
  <div className="flex justify-center gap-6 pb-20">
    <div className="hover:scale-110 duration-200 flex justify-center bg-slate-800 h-min w-max px-4 py-2 rounded">
      <FaJsSquare className="text-yellow-400 text-xl hover:text-white duration-200" />
    </div>
     <div className="hover:scale-110 duration-200 flex justify-center bg-slate-800 h-min w-max px-4 py-2 rounded">
      <SiReact className="text-cyan-400 text-xl hover:text-white duration-200" />
    </div>
     <div className="hover:scale-110 duration-200 flex justify-center bg-slate-800 h-min w-max px-4 py-2 rounded">
      <SiTailwindcss className="text-cyan-400 text-xl hover:text-white duration-200" />
    </div>
     <div className="hover:scale-110 duration-200 flex justify-center bg-slate-800 h-min w-max px-4 py-2 rounded">
      <FaHtml5 className="text-orange-500 text-2xl hover:text-white duration-200" />
    </div>
     <div className="hover:scale-110 duration-200 flex justify-center bg-slate-800 h-min w-max px-4 py-2 rounded">
      <FaCss3Alt className="text-blue-500 text-xl hover:text-white duration-200" />
    </div>

  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-5 items-center">
    <motion.div
    initial={{x:-100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}} 
    className="flex flex-col  gap-5 w-full bg-white px-4 py-4 rounded-xl h-full hover:bg-slate-700 duration-200 cursor-pointer hover:text-white">
      <h2 className="text-2xl text-red-500 text-center font-bold">Comfortable with</h2>
      <p className="text-lg px-5">Comfortable working with HTML, CSS, and Tailwind CSS to build responsive, accessible UIs. Experienced in JavaScript and ReactJS for dynamic frontend development. Exploring Java for backend and object-oriented programming.</p>
      <p className="px-5">#html #css #javascript #react #tailwindcss #java</p>
    </motion.div>
    <motion.div
    initial={{x:100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{duration:1.2,ease:"easeOut"}}
           viewport={{once:true,amount:0.3}}
     className="flex flex-col  gap-5 w-full bg-white px-4 py-4 rounded-xl h-full hover:bg-slate-700 duration-200 cursor-pointer hover:text-white">
      <h2 className="text-2xl text-red-500 text-center font-bold">Learning...</h2>
      <p className="text-lg px-5">As I continue refining responsive UIs and frontend workflows, I’m now diving into the server-side of web development to build more dynamic, scalable applications. My backend journey focuses on:<br/>
- 🧠 Core Concepts: Understanding APIs, databases, authentication, and server logic<br/>
- 🛠️ Tech Stack Exploration: Learning Java and Node.js for backend logic and RESTful API creation<br/>
- 🗃️ Database Integration: Working with MongoDB and SQL to manage and query data<br/>
- 🚀 Deployment & Testing: Building full-stack apps with seamless deployment and performance monitoring
</p>
    </motion.div>
  </div>
</section>
<section id="contact">
  <div className="py-40">
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-white">Get in Touch</h2>
      <h1 className="text-red-500 font-bold text-3xl">Contact</h1>
      <p className="text-white">Feel free</p>
    </div>
    <div className="px-10 py-10 md:px-120">
    <div className="px-10 py-15 bg-gray-700 rounded-xl">
      <form className="flex flex-col items-center gap-5">
        <h2 className="font-bold text-2xl text-white">Contact me</h2>
        <input 
        type="text"
        placeholder="Name"
        className="bg-white rounded-xl px-4 py-2 w-full outline-none"
         />
         <input 
        type="email"
        placeholder="Enter your email"
        className="bg-white rounded-xl px-4 py-2 w-full  outline-none"
         />
         <textarea 
         placeholder="Write Something"
         className="bg-white rounded-xl px-4 py-2 w-full  outline-none"
         
         />
         <button className="w-full px-4 py-2 bg-gray-200 text-black rounded md:w-50 hover:scale-110 hover:bg-gray-900 hover:text-white duration-250">Submit</button>
      </form>
    </div>
    </div>
  </div>
</section>
<footer className="bg-neutral-900 text-gray-300 py-8 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">Aditya Beura</h2>
        <p className="text-sm text-gray-400">
          Student developer crafting responsive web apps with React & Tailwind CSS. Passionate about clean design and scalable code.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Explore</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="#project" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Connect</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="mailto:adityabeura08@gmail.com" className="hover:text-white">Email</a></li>
          <li><a href="https://github.com/Adiii08" className="hover:text-white">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/adityabeura/" className="hover:text-white">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Aditya Beura. Built with ❤️ and Tailwind CSS.
    </div>
  </footer>


    </div>
    )}
    </>
  )
}

export default App
