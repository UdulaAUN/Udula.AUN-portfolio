import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const starsTiny = Array.from({ length: 100 });
const starsSmall = Array.from({ length: 60 });
const starsMedium = Array.from({ length: 30 });
const starsLarge = Array.from({ length: 10 });

export function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  // Parallax calculations
  const parallaxXLarge = useTransform(smoothMouseX, [-1, 1], [-80, 80]);
  const parallaxYLarge = useTransform(smoothMouseY, [-1, 1], [-80, 80]);
  const parallaxXMedium = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const parallaxYMedium = useTransform(smoothMouseY, [-1, 1], [-50, 50]);
  const parallaxXSmall = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const parallaxYSmall = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const nebulaX = useTransform(smoothMouseX, [-1, 1], ["-20%", "20%"]);
  const nebulaY = useTransform(smoothMouseY, [-1, 1], ["-20%", "20%"]);

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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none isolate bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />

      {/* Nebula Layers */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)",
          x: nebulaX,
          y: nebulaY,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(34,211,238,0.08) 0%, transparent 70%)",
          x: useTransform(smoothMouseX, [-1, 1], ["-15%", "15%"]),
          y: useTransform(smoothMouseY, [-1, 1], ["-15%", "15%"]),
        }}
      />

      {/* Tiny Stars */}
      {starsTiny.map((_, i) => (
        <motion.span
          key={`t-${i}`}
          className="absolute w-[1px] h-[1px] bg-white/50 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: useTransform(smoothMouseX, [-1, 1], [-15, 15]),
            y: useTransform(smoothMouseY, [-1, 1], [-15, 15]),
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 2 + Math.random() * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Small Stars */}
      {starsSmall.map((_, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute w-[1.5px] h-[1.5px] bg-blue-100/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: parallaxXSmall,
            y: parallaxYSmall,
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Medium Stars */}
      {starsMedium.map((_, i) => (
        <motion.span
          key={`m-${i}`}
          className="absolute w-[2.5px] h-[2.5px] bg-indigo-200/70 rounded-full blur-[0.5px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: parallaxXMedium,
            y: parallaxYMedium,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Large Stars */}
      {starsLarge.map((_, i) => (
        <motion.span
          key={`l-${i}`}
          className="absolute w-[4px] h-[4px] bg-white/85 rounded-full blur-[1px] shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: parallaxXLarge,
            y: parallaxYLarge,
          }}
          animate={{
            y: [0, -90, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 9 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Final Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
    </div>
  );
}