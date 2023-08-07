import React, { useContext } from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { BuilderContext } from "@/context/builderContext";
import { IProduct } from "@/interface/product";

const ProductCard = ({ products }: { products: IProduct[] }) => {
  const { addComponentToBuilder } = useContext(BuilderContext);
  const router = useRouter();
  const handleProductClick = (product: IProduct) => {
    if (router.query.for === "builder") {
      addComponentToBuilder(product.category, product);
      router.push(`/builder`);
    } else {
      router.push(`/details/${product.id}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product: IProduct) => (
        <Card
          key={product.id}
          hoverable={router.query.for !== "builder"}
          style={{ width: 330, margin: "16px" }}
          cover={
            <Image
              layout="responsive"
              width={600}
              height={400}
              alt={product.name}
              src={product.image}
            />
          }
          onClick={() => handleProductClick(product)}
        >
          <Card.Meta
            title={product.name}
            description={
              <div>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Status: {product.status}</p>
                <p>Rating: {product.average_rating} Stars</p>
              </div>
            }
          />
          {router.query.for === "builder" && (
            <Button
              onClick={() => handleProductClick(product)}
              type="primary"
              block
            >
              Add To Builder
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
