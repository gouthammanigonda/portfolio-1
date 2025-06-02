import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import FooterSection from './components/FooterSection';

import './App.css'; // You can add padding/responsive styles here
import './styles/global.css';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
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
      <Layout style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        <Navbar />

        {/* Optional Header (can be removed if not needed) */}
        <Header style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
          <h1 style={{ color: '#fff', margin: 0 }}>Goutham’s Portfolio</h1>
        </Header>

        {/* Page Content */}
        <Content style={{ padding: '0 20px' }}>
          <div className="container">
            <HeroSection />
            <AboutMe />
            <Projects />
            <ContactMe />
          </div>
        </Content>
        <FooterSection />

        {/* Footer */}
        <Footer style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
          © {new Date().getFullYear()} Goutham. All Rights Reserved.
        </Footer>
      </Layout>
    </ConfigProvider>

  );
};

export default App;
