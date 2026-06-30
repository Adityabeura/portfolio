import { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode, FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home", icon: FaHome },
        { name: "About", href: "#about", icon: FaUser },
        { name: "Projects", href: "#project", icon: FaProjectDiagram },
        { name: "Skills", href: "#skills", icon: FaTools },
        { name: "Contact", href: "#contact", icon: FaEnvelope },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'backdrop-blur-xl backdrop-saturate-150 bg-gray-900/90 border-b border-gray-800/50 shadow-2xl shadow-black/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-30"></div>
                            <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg shadow-lg shadow-red-500/20">
                                <FaCode className="text-white text-lg md:text-xl" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                                Aditya Beura
                            </h2>
                            <p className="text-xs font-medium text-gray-400">
                                Full Stack Developer
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <link.icon className="text-sm text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                                    {link.name}
                                </span>
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setOpen(!open)} 
                            className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={open ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <link.icon className="text-lg text-gray-400" />
                                    <span className="font-medium">{link.name}</span>
                                    <span className="ml-auto text-xs opacity-50">→</span>
                                </motion.a>
                            ))}
                            
                            {/* Mobile Footer */}
                            <div className="mt-6 pt-6 border-t border-gray-800/50">
                                <div className="flex items-center justify-between px-4">
                                    <span className="text-sm text-gray-400">
                                        © 2024 Aditya Beura
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Gradient Border Bottom */}
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent ${
                scrolled ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}></div>
        </motion.nav>
    );
};

export default Navbar;