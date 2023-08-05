import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Typography } from "antd";
const { Title } = Typography;

const featuredProducts = [
  {
    id: 1,
    name: "Product A",
    category: "Category A",
    price: "$19.99",
    inStock: true,
    rating: 4.5,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 2,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 3,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 4,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 5,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  {
    id: 6,
    name: "Product B",
    category: "Category B",
    price: "$29.99",
    inStock: false,
    rating: 3.2,
    imageUrl: "https://source.unsplash.com/random/600x400",
  },
  // Add more products here...
];

export default function CategoryPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      CategoryPage: {router.query.categoryName}
      <div>
        <Title level={2} className="flex justify-center">
          Featured Products
        </Title>
        <ProductCard products={featuredProducts} />
      </div>
    </div>
  );
}
