import Navbar from "./components/Navbar"
import heroimage from "./assets/profile.jpeg"
import projecti from './assets/mood.png'
import Marquee from "react-fast-marquee"
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub, 
  FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt,
  FaReact, FaArrowRight, FaStar, FaCode, FaMobileAlt,
  FaServer, FaDatabase, FaCloudUploadAlt, FaRocket
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiReact, SiVercel, SiNetlify, 
  SiGit, SiFigma, SiTypescript, SiRedux, SiNextdotjs,
  SiMongodb, SiPostgresql, SiDocker, SiExpress, SiFirebase,
  SiFastapi, SiRender
} from 'react-icons/si'
import { IoMdRocket, IoMdCode, IoMdBrush, IoMdPerson } from 'react-icons/io'
import { MdOutlineWorkOutline, MdSchool, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { TbBrandReact } from 'react-icons/tb'
import StarryBackground from "./components/StarryBackground"
import Bouncingarrow from "./components/Bouncingarrow"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Loader from "./components/Loader"
import { useEffect, useState, useRef } from "react"
import project2 from './assets/prep.png'
import chat from './assets/port.png'
import movie from './assets/movie.png'
import { FaDownload } from "react-icons/fa"
// Import your resume PDF
import resumePDF from './assets/AdityaBeura_resume.pdf' // Make sure the path is correct

const App = () => {
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Download Resume function
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'AdityaBeura_Resume.pdf' // The name the file will be saved as
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const projects = [
    {
      id: 1,
      title: "moody-player",
      category: "fullstack",
      description: "Moody Player is an AI-powered music recommendation web application that detects users' emotions through facial expression analysis and plays personalized songs based on their mood.",
      image: projecti,
      tech: ["React", "Tailwind", "JavaScript","Face-api.js","Youtube API","Node.js","Express.js","MongoDB"],
      techIcons: [SiReact, SiTailwindcss, FaJsSquare,FaNodeJs, SiExpress, SiMongodb,FaCode],
      techColors: ["text-cyan-400", "text-cyan-400", "text-yellow-400"],
      link: "https://mood-player-frontend.vercel.app/",
      status: "Live",
      featured: true
    },
    {
      id: 2,
      title: "Prep-radar",
      category: "fullstack",
      description: "PrepRadar is an AI-powered placement readiness platform that analyzes students' technical and academic profiles to predict placement performance, identify skill gaps, and generate personalized improvement roadmaps.",
      image: project2,
      tech: ["React", "Tailwind", "FastAPI","python","scikit-learn","xgboost","joblib","chart.js"],
      techIcons: [SiReact, SiTailwindcss, FaCode, SiFastapi],
      techColors: ["text-cyan-400", "text-cyan-400", "text-blue-400"],
      link: "https://prep-radar-seven.vercel.app/",
      status: "Live",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio",
      category: "frontend",
      description: "Modern portfolio website with animations, responsive design, and seamless user experience.",
      image: chat,
      tech: ["React", "Tailwind", "Framer"],
      techIcons: [SiReact, SiTailwindcss, FaCode],
      techColors: ["text-cyan-400", "text-cyan-400", "text-blue-400"],
      link: "https://portfolio-five-theta-66.vercel.app/",
      status: "Live",
      featured: false
    },
    {
      id: 4,
      title: "Movie App",
      category: "frontend",
      description: "Comprehensive movie discovery platform with search, filters, and recommendation system.",
      image: movie,
      tech: ["React", "Redux", "Tailwind"],
      techIcons: [SiReact, SiRedux, SiTailwindcss],
      techColors: ["text-cyan-400", "text-purple-400", "text-cyan-400"],
      link: "#",
      status: "Upcoming",
      featured: false
    }
  ]

  // Updated skills with new technologies
  const skills = [
    // Frontend
    { name: "React.js", icon: SiReact, color: "text-cyan-400", level: 85, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", level: 70, category: "Frontend" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400", level: 88, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", level: 90, category: "Frontend" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 92, category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 90, category: "Frontend" },
    // Backend
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 65, category: "Backend" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400", level: 60, category: "Backend" },
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-400", level: 55, category: "Backend" },
    // Database
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600", level: 60, category: "Database" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", level: 55, category: "Database" },
  ]

  const achievements = [
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "3", label: "Live Deployments", icon: FaRocket },
    { number: "100+", label: "Hours of Code", icon: FaStar },
    { number: "8+", label: "Tech Stacks", icon: FaServer }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const animationKey = activeFilter

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden">
          <StarryBackground starCount={150} />
          <Navbar />

          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-4 pt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5"></div>
            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="order-2 lg:order-1"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-300">Open to Internships & Freelance</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    <span className="text-gray-300">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Aditya
                    </span>
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">
                    Full Stack Developer
                  </p>

                  <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
                    Building modern, scalable, and responsive web applications with end-to-end solutions. 
                    Passionate about creating seamless user experiences that make a difference.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={downloadResume}
                      className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      Download Resume <FaDownload className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#project"
                      className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    >
                      View Projects <FaArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://github.com/Adiii08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://www.linkedin.com/in/adityabeura/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="mailto:adityabeura08@gmail.com"
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <FaEnvelope className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  className="order-1 lg:order-2 flex justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                      <img 
                        src={heroimage} 
                        alt="Aditya" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gray-800 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700 shadow-xl">
                      <p className="text-sm text-gray-300">💻 5+ Projects</p>
                    </div>
                    <div className="absolute -top-4 -left-4 bg-gray-800 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700 shadow-xl">
                      <p className="text-sm text-gray-300">🚀 Full Stack</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <Bouncingarrow />

          {/* About Section - Updated with new info */}
          <section id="about" className="py-20 px-4 bg-black/30 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  Know <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Me</span> Better
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInLeft}
                  className="lg:col-span-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 rounded-2xl blur-2xl opacity-20"></div>
                    <img
                      src={heroimage}
                      alt="Aditya"
                      className="relative w-full rounded-2xl shadow-2xl border border-gray-700/50"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInRight}
                  className="lg:col-span-3 space-y-6"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm a <span className="text-white font-medium">Full Stack Developer</span> passionate about creating modern, scalable, and responsive web applications. 
                    Currently pursuing <span className="text-white font-medium">B.Tech in Computer Science (2027)</span> at 
                    <span className="text-white font-medium"> Siksha 'O' Anusandhan University</span>. 
                    I specialize in building end-to-end solutions using <span className="text-cyan-400">React</span>, 
                    <span className="text-blue-400"> TypeScript</span>, <span className="text-green-500">Node.js</span>, 
                    <span className="text-teal-400"> FastAPI</span>, <span className="text-green-600">MongoDB</span>, 
                    and modern web technologies.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MdLocationOn className="text-red-400" />
                        <span>Location</span>
                      </div>
                      <p className="text-white font-medium mt-1 text-sm">Bhubaneswar, Odisha, India</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MdSchool className="text-orange-400" />
                        <span>Education</span>
                      </div>
                      <p className="text-white font-medium mt-1 text-sm">B.Tech in CSE</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MdSchool className="text-yellow-400" />
                        <span>University</span>
                      </div>
                      <p className="text-white font-medium mt-1 text-sm">SOA University</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaCalendarAlt className="text-yellow-400" />
                        <span>Graduation</span>
                      </div>
                      <p className="text-white font-medium mt-1">2027</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MdOutlineWorkOutline className="text-cyan-400" />
                        <span>Role</span>
                      </div>
                      <p className="text-white font-medium mt-1 text-sm">Full Stack Developer</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MdEmail className="text-cyan-400" />
                        <span>Email</span>
                      </div>
                      <p className="text-white font-medium mt-1 text-sm">adityabeura08@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">#React</span>
                    <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">#TypeScript</span>
                    <span className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">#JavaScript</span>
                    <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">#Node.js</span>
                    <span className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium">#FastAPI</span>
                    <span className="px-3 py-1.5 bg-green-600/10 border border-green-600/30 rounded-full text-green-400 text-sm font-medium">#MongoDB</span>
                    <span className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">#Firebase</span>
                  </div>
                </motion.div>
              </div>

              {/* Stats Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              >
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-red-500/30 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-red-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      {item.number}
                    </p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack - Updated with new tech */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="mt-16"
              >
                <h4 className="text-center text-gray-400 text-sm font-semibold tracking-wider uppercase mb-6">Tech Stack</h4>
                <Marquee autoFill pauseOnHover speed={40} gradient={false} className="py-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 mx-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
                    >
                      <skill.icon className={`${skill.color} text-2xl`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  ))}
                </Marquee>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="project" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  My <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Each project reflects my passion for clean design, accessible interfaces, and modern web technologies.
                </p>
              </motion.div>

              {/* Filter Buttons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex justify-center gap-3 mb-12 flex-wrap"
              >
                {['all', 'frontend', 'fullstack'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={animationKey}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={scaleIn}
                        whileHover={{ y: -10 }}
                        onClick={() => project.link !== "#" && window.open(project.link)}
                        className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 cursor-pointer ${
                          project.link === "#" ? "opacity-80" : ""
                        }`}
                      >
                        <div className="relative overflow-hidden h-56">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                          {project.status === "Upcoming" && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                              {project.status}
                            </div>
                          )}
                          {project.status === "Live" && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                              ● {project.status}
                            </div>
                          )}
                          {project.featured && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                              <FaStar className="w-3 h-3" /> Featured
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                          <div className="flex items-center gap-3 flex-wrap">
                            {project.techIcons.map((Tech, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 rounded-lg group-hover:bg-gray-700 transition-colors duration-300"
                              >
                                <Tech className={`${project.techColors[i]} text-sm`} />
                                <span className="text-xs text-gray-300">{project.tech[i]}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex justify-end">
                            <span className="text-sm text-red-400 group-hover:text-red-300 transition-colors flex items-center gap-1">
                              View Project <FaArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      variants={scaleIn}
                      className="col-span-full text-center py-12"
                    >
                      <p className="text-gray-400 text-lg">No projects found for this filter</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Skills Section - Updated with organized categories */}
          <section id="skills" className="py-20 px-4 bg-black/30 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  My <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInLeft}
                  className="space-y-5"
                >
                  {/* Frontend Skills */}
                  <div className="mb-4">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FaCode className="text-cyan-400" /> Frontend
                    </h3>
                    {skills.filter(s => s.category === "Frontend").map((skill, index) => (
                      <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <skill.icon className={`${skill.color} text-xl`} />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Backend Skills */}
                  <div className="mb-4">
                    <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FaServer className="text-green-400" /> Backend
                    </h3>
                    {skills.filter(s => s.category === "Backend").map((skill, index) => (
                      <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <skill.icon className={`${skill.color} text-xl`} />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInRight}
                  className="space-y-5"
                >
                  {/* Database Skills */}
                  <div className="mb-4">
                    <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FaDatabase className="text-yellow-400" /> Database
                    </h3>
                    {skills.filter(s => s.category === "Database").map((skill, index) => (
                      <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <skill.icon className={`${skill.color} text-xl`} />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools & Services */}
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 group">
                    <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <FaCloudUploadAlt className="text-purple-400" /> Tools & Services
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <SiGit className="text-orange-500" /> Git
                      </span>
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <FaGithub className="text-white" /> GitHub
                      </span>
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <SiVercel className="text-white" /> Vercel
                      </span>
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <SiRender className="text-blue-400" /> Render
                      </span>
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <SiNetlify className="text-teal-400" /> Netlify
                      </span>
                      <span className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 flex items-center gap-2">
                        <SiPostgresql className="text-blue-400" /> Postman
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm p-6 rounded-lg border border-red-500/30">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I'm a <span className="text-white font-medium">Full Stack Developer</span> passionate about creating modern, scalable, and responsive web applications. 
                      I specialize in building end-to-end solutions using <span className="text-cyan-400">React</span>, 
                      <span className="text-blue-400"> TypeScript</span>, <span className="text-green-500">Node.js</span>, 
                      <span className="text-teal-400"> FastAPI</span>, <span className="text-green-600">MongoDB</span>, 
                      <span className="text-yellow-500"> Firebase</span>, and modern web technologies. 
                      I'm always exploring new technologies and building projects that deliver seamless user experiences.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  Contact <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-400 mt-4">Have a question or want to work together? Let's talk!</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">Your Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IoMdPerson className="text-gray-500" />
                        </div>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdEmail className="text-gray-500" />
                        </div>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Let's work together!"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <FaRocket className="w-4 h-4" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                    Aditya Beura
                  </h3>
                  <p className="text-gray-400 max-w-md leading-relaxed">
                    Full Stack Developer crafting modern, scalable, and responsive web applications with end-to-end solutions.
                    Passionate about clean design and seamless user experiences.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a href="https://github.com/Adiii08" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/adityabeura/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:adityabeura08@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li><a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><FaArrowRight className="w-3 h-3 text-red-400" /> Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><FaArrowRight className="w-3 h-3 text-red-400" /> About</a></li>
                    <li><a href="#project" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><FaArrowRight className="w-3 h-3 text-red-400" /> Projects</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><FaArrowRight className="w-3 h-3 text-red-400" /> Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-3">
                      <MdEmail className="text-red-400" />
                      <span className="text-sm">adityabeura08@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MdLocationOn className="text-red-400" />
                      <span className="text-sm">Bhubaneswar, Odisha, India</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCalendarAlt className="text-red-400" />
                      <span className="text-sm">Class of 2027</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Aditya Beura. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  Built with <span className="text-red-400">❤️</span> and Tailwind CSS
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default App