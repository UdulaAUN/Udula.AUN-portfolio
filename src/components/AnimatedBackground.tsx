import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const starsTiny = Array.from({ length: 120 });
const starsSmall = Array.from({ length: 70 });
const starsMedium = Array.from({ length: 35 });
const starsLarge = Array.from({ length: 15 });

export function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  // Parallax for stars (kept your requested original responsiveness)
  const parallaxXLarge = useTransform(smoothMouseX, [-1, 1], [-80, 80]);
  const parallaxYLarge = useTransform(smoothMouseY, [-1, 1], [-80, 80]);
  const parallaxXMedium = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const parallaxYMedium = useTransform(smoothMouseY, [-1, 1], [-50, 50]);
  const parallaxXSmall = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const parallaxYSmall = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const nebulaX = useTransform(smoothMouseX, [-1, 1], ["-15%", "15%"]);
  const nebulaY = useTransform(smoothMouseY, [-1, 1], ["-15%", "15%"]);

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
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-70px) rotate(1.5deg); } 
        }
        .drift-layer {
          animation: drift var(--d-dur) ease-in-out infinite;
          animation-delay: var(--d-delay);
        }
      `}</style>

      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Primary Nebula */}
      <motion.div
        className="absolute inset-[-20%] opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)",
          x: nebulaX,
          y: nebulaY,
          scale: 1.2,
        }}
      />

      {/* Tiny Background Stars - Slightly more visible */}
      {starsTiny.map((_, i) => (
        <motion.span
          key={`t-${i}`}
          className="absolute w-[1.2px] h-[1.2px] bg-white/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: useTransform(smoothMouseX, [-1, 1], [-15, 15]),
            y: useTransform(smoothMouseY, [-1, 1], [-15, 15]),
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity }}
        />
      ))}

      {/* Moving Parallax Layers (Balanced Speed) */}
      {[
        { data: starsSmall, size: "1.8px", color: "bg-blue-100/60", x: parallaxXSmall, y: parallaxYSmall, dur: 4.5 }, 
        { data: starsMedium, size: "2.8px", color: "bg-indigo-100/75", x: parallaxXMedium, y: parallaxYMedium, dur: 6.5 },
        { data: starsLarge, size: "4.5px", color: "bg-white", x: parallaxXLarge, y: parallaxYLarge, dur: 9 },
      ].map((layer, lIdx) => (
        layer.data.map((_, i) => (
          <div
            key={`${lIdx}-${i}`}
            className="drift-layer absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              // @ts-ignore
              "--d-dur": `${layer.dur + Math.random() * 3}s`,
              "--d-delay": `${Math.random() * -10}s`,
            }}
          >
            <motion.span
              className={`block rounded-full ${layer.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
              style={{
                width: layer.size,
                height: layer.size,
                x: layer.x,
                y: layer.y,
                boxShadow: lIdx === 2 ? "0 0 12px rgba(255,255,255,0.6)" : "0 0 6px rgba(147,197,253,0.3)"
              }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
            />
          </div>
        ))
      ))}

      {/* Foreground Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
    </div>
  );
}