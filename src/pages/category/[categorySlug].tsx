import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Typography } from "antd";
import { GetStaticProps } from "next";
import { IProduct } from "@/interface/product";
const { Title } = Typography;

export default function CategoryPage({ products }: { products: IProduct[] }) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
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
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();
  const paths = products.map((product: IProduct) => ({
    params: { categorySlug: product['category-slug'] },
  }));
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context)
  const { categorySlug } = context.params;
  const res = await fetch(`http://localhost:3000/api/category/${categorySlug}`);
  const products = await res.json();
  return { props: { products } };
};
