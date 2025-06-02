import React from 'react';
import { Typography } from 'antd';

const FooterSection = () => (
  <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#aaa' }}>
    <Typography.Text>&copy; {new Date().getFullYear()} Goutham</Typography.Text>
  </footer>
);

export default FooterSection;
