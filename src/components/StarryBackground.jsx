import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarryBackground = ({ starCount = 100 }) => {
  
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3,
      opacity: Math.random(),
    }));
  }, [starCount]);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
        
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, star.opacity, 0] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
    </div>
  );
};

export default StarryBackground;