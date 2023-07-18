import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-base-regular text-green-600 mb-2">
            Best sellers
          </span>
          <p className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Browse our customer favorites</p>
          <p className="text-lg-regular text-gray-900 max-w-lg mb-1">
            Our newest styles are here to help you look your best.
          </p>
          
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
        
      </div>
      <div  className="flex flex-col items-center text-center">
      <UnderlineLink href="/store">Shop all products</UnderlineLink>
      </div>
    </div>
  )
}

export default FeaturedProducts
