import React from 'react';
import { Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Me</h2>
      <Form layout="vertical">
        <Form.Item label="Name" name="name">
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item label="Message" name="message">
          <Input.TextArea rows={4} placeholder="Say something..." />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form>
    </motion.section>
  );
};

export default ContactMe;
