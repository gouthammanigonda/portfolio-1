import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Row justify="center">
        <Col xs={24} md={20} lg={14}>
          <Typography.Title style={{ color: 'white', fontSize: '3rem' }}>
            Hello, I’m Goutham 👋
          </Typography.Title>
          <Typography.Paragraph style={{ color: '#aaa', fontSize: '1.2rem' }}>
            A passionate developer crafting beautiful digital experiences.
          </Typography.Paragraph>
        </Col>
      </Row>
    </motion.section>
  );
};

export default HeroSection;
