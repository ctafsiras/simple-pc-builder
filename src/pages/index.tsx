import ProductCard from "@/components/ProductCard";
import { Button, Radio, Space, Divider, Col, Card, Row } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { GetStaticProps } from "next";
import { IProduct } from "@/interface/product";
import Head from "next/head";

const { Title, Paragraph, Text } = Typography;

export const featuredCategories = [
  {
    title: "CPU / Processor",
    key: "category/cpu-processor",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },
  {
    title: "Motherboard",
    key: "category/motherboard",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },
  {
    title: "RAM",
    key: "category/ram",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },

  {
    title: "Power Supply Unit",
    key: "category/power-supply-unit",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },
  {
    title: "Storage Device",
    key: "category/storage-device",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },
  {
    title: "Monitor",
    key: "category/monitor",
    imageUrl: "https://source.unsplash.com/random/150x150",
  },
];
export default function Home({
  recentProducts,
}: {
  recentProducts: IProduct[];
}) {
  return (
    <>
      <Head>
        <title>Simple PC Builder</title>
      </Head>
      <HeroSection />
      <div>
        <Title level={2} className="flex justify-center">
          Featured Products
        </Title>
        <ProductCard products={recentProducts} />
      </div>

      <div>
        <Title level={2} className="flex justify-center">
          Featured Categories
        </Title>
        <Row gutter={[16, 16]}>
          {featuredCategories.map((category) => (
            <Col key={category.title} xs={24} sm={12} md={8}>
              <Link href={category.key}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <Image
                        layout="responsive"
                        width={600}
                        height={400}
                        alt={category.title}
                        src={category.imageUrl}
                      />
                    }
                  >
                    <Card.Meta title={category.title} />
                  </Card>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/recent-products");
  // const recentProducts = await res.json();
  const recentProducts:[] = [];
  return { props: { recentProducts } };
};
