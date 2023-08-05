import React from 'react';
import { Layout, Typography, Button } from 'antd';
import Link from 'next/link';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <Layout style={{ background: 'url("https://source.unsplash.com/random/500x500") center/cover no-repeat', height: '400px' }}>
      <Header style={{ background: 'rgba(0, 0, 0, 0.5)', height: '100%' }}>
        <Content style={{ textAlign: 'center', color: '#ffffff' }} className='md:p-[50px]'>
          <Title style={{ color: '#ffffff' }}>Welcome to Simple PC Builder</Title>
          <Paragraph style={{ color: '#ffffff', fontSize: '18px' }}>
            We provide high-quality products and excellent services for all your needs.
          </Paragraph>
          <Link href={'/builder'}><Button type="primary" size="large">PC Builder</Button></Link>
        </Content>
      </Header>
    </Layout>
  );
};

export default HeroSection;
