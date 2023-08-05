import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  console.log(router);
  return <div>CategoryPage: {router.query.categoryName}</div>;
}
