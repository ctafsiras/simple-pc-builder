import React from "react";
import { Row, Col, Card, Avatar, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
const { Meta } = Card;

const ProductDetailPage = () => {
  // Placeholder data for the PC component
  const product = {
    image: "https://source.unsplash.com/random/500x500",
    productName: "Example PC Component",
    category: "CPU / Processor",
    inStock: true,
    price: "$199.99",
    description: "This is a placeholder description for the product.",
    keyFeatures: [
      "Brand: Example",
      "Model: XYZ123",
      "Specification: ABC",
      "Port: USB 3.0",
      "Type: Solid State Drive",
    ],
    individualRating: 4.5,
    averageRating: 4.2,
    reviews: [
      { author: "User1", rating: 5, comment: "Great product!" },
      { author: "User2", rating: 4, comment: "Good quality." },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            cover={
              <Image
                layout="responsive"
                width={600}
                height={400}
                alt={product.productName}
                src={product.image}
              />
            }
            actions={product.inStock ? ["In Stock"] : ["Out of stock"]}
          >
            <Meta title={product.productName} description={product.price} />
          </Card>
        </Col>
        <Col span={12}>
          <h1>{product.productName}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <h2>Key Features:</h2>
          <ul>
            {product.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h2>Individual Rating:</h2>
          <Rate disabled defaultValue={product.individualRating} />
          <h2>Average Rating:</h2>
          <Rate disabled allowHalf defaultValue={product.averageRating} />
          <h2>Reviews:</h2>
          {product.reviews.map((review, index) => (
            <div key={index}>
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: "10px" }}
                icon={<UserOutlined />}
              />
              <strong>{review.author}</strong> -{" "}
              <Rate disabled defaultValue={review.rating} />{" "}
              <p>{review.comment}</p>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
