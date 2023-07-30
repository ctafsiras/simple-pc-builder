import ProductCard from "@/components/ProductCard";
import { Button, Radio, Space, Divider } from "antd";
import { Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text, Link } = Typography;

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
export default function Home() {
  return (
    <>
      <div>
        <Title level={2} className="flex justify-center">
          Feature Images
        </Title>
        <ProductCard products={featuredProducts} />
      </div>
    </>
  );
}
