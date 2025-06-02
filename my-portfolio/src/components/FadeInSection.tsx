// components/FadeInSection.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
