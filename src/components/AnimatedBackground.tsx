import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const bars = Array.from({ length: 12 });
const shards = Array.from({ length: 20 });

export function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for that snappy, mechanical feel
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none isolate">
      {/* 1. Base Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* 2. Reactive "Corrupted" Spotlight */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(circle 350px at ${((x as number) + 1) * 50}% ${((y as number) + 1) * 50}%, rgba(79, 70, 229, 0.15), transparent 80%)`
          )
        }}
      />

      {/* 3. Mouse-Responsive "Magnetic Shards" */}
      {shards.map((_, i) => (
        <motion.div
          key={`shard-${i}`}
          className="absolute h-[2px] w-[15px] bg-indigo-500/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            // Shards pull toward the mouse
            x: useTransform(smoothX, [-1, 1], [Math.random() * -150, Math.random() * 150]),
            y: useTransform(smoothY, [-1, 1], [Math.random() * -150, Math.random() * 150]),
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleX: [1, 2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 4. Glitchy Vertical Grid (Interacts with Mouse) */}
      {bars.map((_, i) => (
        <motion.div
          key={`bar-${i}`}
          className="absolute w-[1px] h-full bg-white/[0.03]"
          style={{
            left: `${(i * 100) / 12}%`,
            // Bars skew slightly as mouse passes
            skewX: useTransform(smoothX, [-1, 1], [i % 2 === 0 ? 5 : -5, i % 2 === 0 ? -5 : 5]),
          }}
        />
      ))}

      {/* 5. "Data Leak" Blocks (Randomly appear/flicker) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`leak-${i}`}
          className="absolute bg-indigo-600/10 border-l border-indigo-500/50 text-[10px] font-mono text-indigo-400/20 px-2 py-1"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 0.3, 0, 0.1, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
        >
          RAW_DATA_{i}
        </motion.div>
      ))}

      {/* 6. Vertical Scanning Line (CRT Style) */}
      <motion.div 
        className="absolute inset-0 w-full h-[100px] bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent pointer-events-none"
        animate={{ y: ["-100%", "1000%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* 7. Bottom Gradient to fade into content */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
    </div>
  );
}