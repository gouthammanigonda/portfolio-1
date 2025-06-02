import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <motion.section
    id="about"
    className="section"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Typography.Title level={2}>About Me</Typography.Title>
    <Typography.Paragraph>
      I’m a creative frontend developer with a love for clean design and snappy animations.
      I enjoy turning complex problems into simple, beautiful solutions.
    </Typography.Paragraph>
  </motion.section>
);

export default AboutMe;
