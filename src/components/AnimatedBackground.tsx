import React from "react";
import { motion } from "framer-motion";

const starsSmall = Array.from({ length: 80 });
const starsMedium = Array.from({ length: 40 });
const starsLarge = Array.from({ length: 20 });

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none isolate bg-slate-950">
      
      {/* Small stars */}
      {starsSmall.map((_, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute w-[1px] h-[1px] bg-white/70 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Medium stars */}
      {starsMedium.map((_, i) => (
        <motion.span
          key={`m-${i}`}
          className="absolute w-[2px] h-[2px] bg-blue-300/70 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 18 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large stars */}
      {starsLarge.map((_, i) => (
        <motion.span
          key={`l-${i}`}
          className="absolute w-[3px] h-[3px] bg-indigo-300/80 rounded-full blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -70, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950" />
    </div>
  );
}
