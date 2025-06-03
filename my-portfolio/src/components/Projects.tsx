import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import "./Projects.css";

const { Meta } = Card;

const projectData = [
  {
    title: 'DocuSign Clone',
    description: 'React + InteractJS + Ant Design based document signer.',
    image: '/assets/docusign-clone.jpg',
    github: 'https://github.com/yourname/docusign-clone',
    live: 'https://docusign-clone.vercel.app',
  },
  {
    title: 'AI Portfolio Generator',
    description: 'Create portfolios with GPT and Framer Motion.',
    image: '/assets/ai-portfolio.jpg',
    github: 'https://github.com/yourname/docusign-clone',
    live: 'https://docusign-clone.vercel.app',
  },
  {
    title: 'PDF Designer',
    description: 'Build drag-n-drop PDF layouts with gradient support.',
    image: '/assets/pdf-designer.jpg',
    github: 'https://github.com/yourname/docusign-clone',
    live: 'https://docusign-clone.vercel.app',
  },
];

const Projects: React.FC = () => {
  return (
    <FadeInSection direction="right">
      <section className="section" id="projects">
        <h2>Projects</h2>
        <Row gutter={[16, 16]}>
          {projectData.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  hoverable
                  cover={
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} />
                      <div className="project-hover-overlay">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"><LinkOutlined /></a>
                      </div>
                    </div>
                  }
                >
                  <Meta title={project.title} description={project.description} />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>
    </FadeInSection>
  );
};

export default Projects;
