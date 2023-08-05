import {useRouter} from "next/router"

export default function ProductDetailPage() {
    const router=useRouter()
  return (
    <div>ProductDetailPage : {router.query.productId}</div>
  )
}