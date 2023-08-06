import React, { useContext } from "react";
// or useContext for Context API implementation
import { Button, Card, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import { BuilderContext } from "@/context/builderContext";
import { featuredCategories } from ".";

const PCBuilderPage = () => {
  const categories = [
    "CPU / Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];
  const { selectedComponents } = useContext(BuilderContext);

  // Replace 'selectedComponents' with your Redux state or context state
  // const selectedComponents = useSelector((state) => state.selectedComponents);

  // Check if at least 5-6 components are selected to enable the Complete Build button
  console.log(selectedComponents)
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
            {selectedComponents[i] ?? "No component selected"}
            {console.log(selectedComponents[i])}
          </Card>
        ))}
      </Card>

      <h1>PC Builder Page</h1>
      {featuredCategories.map((category) => (
        <Col key={category.key} xs={24} sm={12} md={8}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              type="inner"
              style={{ width: 740 }}
              // cover={
              //   <Image
              //     layout="responsive"
              //     width={50}
              //     height={50}
              //     alt={category.title}
              //     src={"https://source.unsplash.com/random/50x50"}
              //   />
              // }
            >
              <Card.Meta title={category.title} />

              <Link key={category.key} href={`/${category.key}?for=builder`}>
                <Button type="primary" style={{ margin: "5px" }}>
                  Choose {category.title}
                </Button>
              </Link>
            </Card>
          </div>
        </Col>
      ))}
      <br />

      <Button type="primary" disabled={!isBuildComplete}>
        Complete Build
      </Button>
    </div>
  );
};

export default PCBuilderPage;
