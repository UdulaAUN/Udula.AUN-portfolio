import React, { useEffect, useRef, useState } from 'react';
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
  
  // Logic to check if mobile (standard mobile breakpoint is 768px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isInView = useInView(ref, {
    // If mobile, animate 'once' (true). If desktop, repeat (false).
    once: isMobile, 
    margin: '-100px'
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else if (!isMobile) {
      // Only reset to hidden if we are NOT on mobile
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, isMobile]);

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            scale: 0.9,
            filter: 'blur(10px)',
            y: 20
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            filter: 'blur(0px)',
            y: 0 
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.21, 1.11, 0.81, 0.99]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};