import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">Goutham</div>

      <div className="nav-desktop">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <Button className="menu-btn" icon={<MenuOutlined />} onClick={() => setOpen(true)} />

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ backgroundColor: '#000' }}
      >
        <Menu theme="dark" mode="vertical" onClick={() => setOpen(false)}>
          <Menu.Item key="home"><a href="#hero">Home</a></Menu.Item>
          <Menu.Item key="about"><a href="#about">About</a></Menu.Item>
          <Menu.Item key="projects"><a href="#projects">Projects</a></Menu.Item>
          <Menu.Item key="contact"><a href="#contact">Contact</a></Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
