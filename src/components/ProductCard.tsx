import React from "react";
import { Card } from "antd";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Product A",
    category: "Category A",
    price: "$19.99",
    inStock: true,
    rating: 4.5,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 7,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://placehold.co/600x400",
  },
  // Add more products here...
];

const ProductCard = () => {
  const handleProductClick = (productId: number) => {
    // Implement your logic to handle the click event and navigate to the product detail page.
    // For example, you can use React Router's 'Link' component or any other navigation method.
    console.log(`Clicked product with ID: ${productId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {featuredProducts.map((product) => (
        <Card
          key={product.id}
          hoverable
          style={{ width: 300, margin: "16px" }}
          cover={
            <Image
              layout="responsive"
              width={600}
              height={400}
              alt={product.name}
              src={product.imageUrl}
            />
          }
          onClick={() => handleProductClick(product.id)}
        >
          <Card.Meta
            title={product.name}
            description={
              <div>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Status: {product.inStock ? "In Stock" : "Out of stock"}</p>
                <p>Rating: {product.rating} Stars</p>
              </div>
            }
          />
          
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
