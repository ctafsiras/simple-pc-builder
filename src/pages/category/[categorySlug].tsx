import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Typography } from "antd";
import { GetStaticProps } from "next";
import { IProduct } from "@/interface/product";
import Head from "next/head";
const { Title } = Typography;

export default function CategoryPage({ products }: { products: IProduct[] }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{products[0].category} Category | Simple PC Builder</title>
      </Head>
      <div>
        <Title level={2} className="flex justify-center">
          {products[0].category} Category Products
        </Title>
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://simple-pc-builder.vercel.app/api/products`);
  const products = await res.json();
  const paths = products.map((product: IProduct) => ({
    params: { categorySlug: product["category-slug"] },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { categorySlug } = context.params!;
  const res = await fetch(
    `https://simple-pc-builder.vercel.app/api/category/${categorySlug}`
  );
  const products = await res.json();
  return { props: { products } };
};
