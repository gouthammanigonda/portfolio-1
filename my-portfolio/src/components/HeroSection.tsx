import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]); // Parallax strength

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Parallax Layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/bg.png')`, // Make sure bg.jpg exists in /public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
          color: '#fff',
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          <Typewriter
            words={['Hello, I’m Goutham 👋', 'Creative Developer', 'UI/UX Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
          I build engaging, performant, and modern web applications with beautiful design.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
