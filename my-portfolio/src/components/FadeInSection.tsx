// components/FadeInSection.tsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

const FadeInSection: React.FC<Props> = ({ children, direction = 'up', delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
