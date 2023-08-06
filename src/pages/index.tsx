import ProductCard from "@/components/ProductCard";
import { Button, Radio, Space, Divider, Col, Card, Row } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const { Title, Paragraph, Text } = Typography;

const featuredProducts = [
  {
    id: 1,
    name: "Product A",
    category: "Category A",
    price: "$19.99",
    inStock: true,
    rating: 4.5,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 2,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 3,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 4,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 5,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 6,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  // Add more products here...
];

export const featuredCategories = [
  {
    title: "CPU / Processor",
    key: "category/cpu-rocessor",
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
export default function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <Title level={2} className="flex justify-center">
          Featured Products
        </Title>
        <ProductCard products={featuredProducts} />
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
