"use client";

import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SnowflakesProps {
  count?: number;
  className?: string;
  color?: string;
}

export default function Snowflakes({ 
  count = 20, 
  className = "absolute inset-0 pointer-events-none z-0",
  color = "text-blue-200"
}: SnowflakesProps) {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      delay: Math.random() * 5,  // Random startup delay
      duration: 5 + Math.random() * 10, // Random fall duration (5-15s)
      size: 10 + Math.random() * 20, // Random size (10-30px)
    }));
    setSnowflakes(flakes);
  }, [count]);

  return (
    <div className={`${className} overflow-hidden`}>
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: ["0%", "1000%"], // Fall far down to ensure it goes off screen if container is tall
            x: [0, 20, -20, 0], // Swaying motion
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay
            },
            x: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            opacity: {
              duration: flake.duration,
              repeat: Infinity,
              times: [0, 0.1, 0.9, 1],
              delay: flake.delay
            },
            rotate: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay
            }
          }}
          className={`absolute top-0 ${color}`}
          style={{ 
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size
          }}
        >
          <Snowflake size={flake.size} />
        </motion.div>
      ))}
    </div>
  );
}
