import React, { useContext } from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { BuilderContext } from "@/context/builderContext";
import { IProduct } from "@/interface/product";

const ProductCard = ({ products }: { products: IProduct[] }) => {
  const { selectedComponents, addComponentToBuilder } =
    useContext(BuilderContext);
  const router = useRouter();
  // console.log(selectedComponents);
  const handleProductClick = (product: IProduct) => {
    // Implement your logic to handle the click event and navigate to the product detail page.
    // For example, you can use React Router's 'Link' component or any other navigation method.
    if (router.query.for === "builder") {
      addComponentToBuilder(product.category, product);
      router.push(`/builder`);
    } else {
      router.push(`/details/${product.id}`);
    }

    // console.log(`Clicked product with ID: ${product.id}`);
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
          hoverable
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
          {/* {router.query.for === "builder" && (
            <Button
              onClick={() => handleProductSelect(product.id)}
              type="primary"
              block
            >
              Select
            </Button>
          )} */}
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
