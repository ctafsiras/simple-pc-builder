import React, { useContext, useState } from "react";
import { Button, Card, Modal } from "antd";
import Link from "next/link";
import { BuilderContext } from "@/context/builderContext";
import { featuredCategories } from ".";
import ProductCard from "@/components/ProductCard";
import { IDefaultSelectedComponents } from "@/interface/product";
import Head from "next/head";

const PCBuilderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedComponents } = useContext(BuilderContext);
  const isBuildComplete =
    Object.values(selectedComponents).filter(Boolean).length >= 6;
  return (
    <div>
      <Head>
        <title>PC Builder | Simple PC Builder</title>
      </Head>
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
            {selectedComponents![category.title] ? (
              <ProductCard products={[selectedComponents[category.title]!]} />
            ) : (
              "No component selected"
            )}
          </Card>
        ))}
        <Button onClick={()=>setIsModalOpen(true)} className="mt-6 " type="primary" disabled={!isBuildComplete}>
          Complete Build
        </Button>
      </Card>
      <Modal title="Congratulations" open={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)}>
        <p>You have successfully built your PC</p>
        <p>Try Again</p>
        <p>Thank You</p>
      </Modal>
    </div>
  );
};

export default PCBuilderPage;
