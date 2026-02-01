import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  width = 'fit-content',
  delay = 0,
  className = ''
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Animates every time
    margin: '-100px' // Triggers slightly later for a better reveal effect
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            scale: 0.9,      // Starts slightly smaller
            filter: 'blur(10px)', // Starts blurry
            y: 20            // Slight lift
          },
          visible: { 
            opacity: 1, 
            scale: 1,        // Grows to full size
            filter: 'blur(0px)', // Clears up
            y: 0 
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.21, 1.11, 0.81, 0.99] // Custom "Back Out" cubic-bezier for a slight bounce
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};