import React, { useContext } from "react";
// or useContext for Context API implementation
import { Button, Card, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import { BuilderContext } from "@/context/builderContext";
import { featuredCategories } from ".";
import ProductCard from "@/components/ProductCard";

const PCBuilderPage = () => {
  const { selectedComponents } = useContext(BuilderContext);
  console.log(selectedComponents);
  const isBuildComplete =
    Object.values(selectedComponents).filter(Boolean).length >= 6;
  return (
    <div>
      <Card title="PC Builder Page">
        {featuredCategories.map((category, i) => (
          <Card
            key={category.key}
            style={{ marginTop: 16 }}
            type="inner"
            title={category.title}
            extra={
              <Link key={category.key} href={`/${category.key}?for=builder`}>
                <Button type="primary" style={{ margin: "5px" }}>
                  Choose {category.title}
                </Button>
              </Link>
            }
          >
            {selectedComponents[category.title] ? (
              <ProductCard products={[selectedComponents[category.title]]} />
            ) : (
              "No component selected"
            )}
          </Card>
        ))}
        <Button className="mt-6 " type="primary" disabled={!isBuildComplete}>
          Complete Build
        </Button>
      </Card>
    </div>
  );
};

export default PCBuilderPage;
