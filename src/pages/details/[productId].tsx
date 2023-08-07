import React from "react";
import { Row, Col, Card, Avatar, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { IProduct } from "@/interface/product";
import { GetStaticProps } from "next";
import Head from "next/head";
const { Meta } = Card;

const ProductDetailPage = ({ product }: { product: IProduct }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello</h1>
      {/* <Head>
        <title>{product.name} | Simple PC Builder</title>
      </Head>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            cover={
              <Image
                layout="responsive"
                width={600}
                height={400}
                alt={product.name}
                src={product.image}
              />
            }
            actions={
              product.status === "In Stock" ? ["In Stock"] : ["Out of stock"]
            }
          >
            <Meta title={product.name} description={product.price} />
          </Card>
        </Col>
        <Col span={12}>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <h2>Key Features:</h2>
          <ul>
            {Object.entries(product.key_features).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h2>Individual Rating:</h2>
          <Rate disabled defaultValue={Number(product.individual_rating)} />
          <h2>Average Rating:</h2>
          <Rate
            disabled
            allowHalf
            defaultValue={Number(product.average_rating)}
          />
          <h2>Reviews:</h2>
          {product.reviews.map((review, index) => (
            <div key={index}>
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: "10px" }}
                icon={<UserOutlined />}
              />
              <strong>{"Jhon Deo"}</strong> - <Rate disabled defaultValue={4} />{" "}
              <p>{review}</p>
            </div>
          ))}
        </Col>
      </Row> */}
    </div>
  );
};

export default ProductDetailPage;

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/products`);
//   const products = await res.json();
//   const paths = products.map((product: IProduct) => ({
//     params: { productId: String(product.id) },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { productId } = context.params!;
//   const res = await fetch(
//     `http://localhost:3000/api/details/${productId}`
//   );
//   const product = await res.json();
//   return { props: { product } };
// };
