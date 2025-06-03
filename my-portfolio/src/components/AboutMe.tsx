import { Typography } from 'antd';
import FadeInSection from './FadeInSection';

const AboutMe = () => {
  return (
    <section id="about" className="container">
      <FadeInSection direction="left" >
        <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
          About Me
        </Typography.Title>
        <Typography.Paragraph style={{ color: '#ccc', textAlign: 'center' }}>
          I'm a developer who loves building smooth, creative, and impactful interfaces...
        </Typography.Paragraph>
      </FadeInSection>
    </section>
  );
};

export default AboutMe;
