import React from 'react';
import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Built with React and Firebase' },
    { title: 'Project Two', description: 'Full-stack app with Node and MongoDB' },
  ];

  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Projects</h2>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={index}>
            <Card title={project.title} bordered={false}>
              {project.description}
            </Card>
          </Col>
        ))}
      </Row>
    </motion.section>
  );
};

export default Projects;
