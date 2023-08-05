import React from "react";
import { Layout, Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

// const { Footer } = Layout;

const socialMediaLinks = [
  { icon: <GithubOutlined />, url: "https://github.com/ctafsiras" },
  { icon: <TwitterOutlined />, url: "https://twitter.com/ctafsiras" },
  { icon: <InstagramOutlined />, url: "https://instagram.com/ctafsiras" },
  { icon: <LinkedinOutlined />, url: "https://linkedin.com/in/ctafsiras" },
];

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", background: "#f0f2f5", paddingTop: "20px", marginTop: '10px' }}
    >
      <div style={{marginBottom: '10px'}}>© 2023 Simple PC Builder</div>
      <Space size="small">
        <a
          href="https://github.com/ctafsiras"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://twitter.com/ctafsiras"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <span>|</span>
        <a
          href="https://instagram.com/ctafsiras"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <span>|</span>
        <a
          href="https://linkedin.com/in/ctafsiras"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Space>
      <div style={{ marginTop: "10px" }}>
        <Space size="small">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              {/* <Icon component={link.icon} /> */}
              {link.icon}
            </a>
          ))}
        </Space>
      </div>
    </footer>
  );
};

export default Footer;
