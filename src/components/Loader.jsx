import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 200
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-2xl shadow-red-500/30">
            <FaCode className="text-white text-3xl" />
          </div>
        </motion.div>

        {/* Loading Text with Typing Animation */}
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-medium">Loading</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="text-white text-lg font-medium"
          >
            ...
          </motion.span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="h-full w-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
          />
        </div>

        {/* Decorative Elements */}
        <div className="flex gap-2">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              delay: 0
            }}
            className="w-2 h-2 bg-red-500 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              delay: 0.3
            }}
            className="w-2 h-2 bg-orange-500 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              delay: 0.6
            }}
            className="w-2 h-2 bg-yellow-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;