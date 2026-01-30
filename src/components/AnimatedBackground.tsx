import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const blocks = Array.from({ length: 15 });
const lines = Array.from({ length: 20 });

export function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster, snappier springs for a high-energy glitch feel
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      {/* 1. High-Visibility Noise & Grain */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150 brightness-150 mix-blend-overlay" />

      {/* 2. Intense Mouse "Torch" - High Visibility Blue */}
      <motion.div
        className="absolute inset-0 z-10 mix-blend-screen"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(circle 450px at ${((x as number) + 1) * 50}% ${((y as number) + 1) * 50}%, rgba(99, 102, 241, 0.25), transparent 80%)`
          )
        }}
      />

      {/* 3. Floating "Broken Data" Blocks - Sharp and Visible */}
      {blocks.map((_, i) => (
        <motion.div
          key={`block-${i}`}
          className="absolute border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-[1px]"
          style={{
            width: Math.random() * 150 + 40,
            height: Math.random() * 80 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            x: useTransform(smoothX, [-1, 1], [Math.random() * -200, Math.random() * 200]),
            y: useTransform(smoothY, [-1, 1], [Math.random() * -200, Math.random() * 200]),
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            skewX: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
           <div className="w-full h-1 bg-indigo-500/40 absolute top-0" />
           <span className="text-[9px] font-mono text-indigo-300/40 p-1 block">BLOCK_ERR_{i}</span>
        </motion.div>
      ))}

      {/* 4. Moving Scanlines - Constant Motion */}
      {lines.map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-full bg-indigo-400/20"
          style={{
            top: `${(i * 100) / 20}%`,
          }}
          animate={{
            opacity: [0.05, 0.3, 0.05],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 5. Horizontal "Glitch Rip" Effect */}
      <motion.div
        className="absolute w-full h-[40px] bg-indigo-600/5 border-y border-indigo-500/20"
        animate={{
          top: ["-10%", "110%"],
          skewY: [0, 2, -2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 6. Reactive Center Glow - Keeps the content area readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.8)_100%)]" />

      {/* 7. CRT Jitter Effect (Optional) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}