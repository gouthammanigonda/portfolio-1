import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import FooterSection from './components/FooterSection';

import './styles/global.css';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fff',
          colorBgBase: '#000',
          colorTextBase: '#fff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', backgroundColor: '#000' }}>
        <Navbar />
        <Content>
          <HeroSection />
          <AboutMe />
          <Projects />
          <ContactMe />
        </Content>
        <FooterSection />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
