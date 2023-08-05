import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number | string;
  inStock: boolean;
  rating: number;
  imageUrl: string;
}

const ProductCard = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();
  const handleProductClick = (productId: number) => {
    // Implement your logic to handle the click event and navigate to the product detail page.
    // For example, you can use React Router's 'Link' component or any other navigation method.
    router.push(`/details/${productId}`);
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
