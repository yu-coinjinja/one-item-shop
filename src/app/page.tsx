import Image from "next/image";
import BuyButton from "@/components/BuyButton";

export default function Home() {
  const productName = process.env.NEXT_PUBLIC_PRODUCT_NAME || "Awesome Gadget";
  const productDescription =
    process.env.NEXT_PUBLIC_PRODUCT_DESCRIPTION ||
    "This is the most awesome gadget you will ever own!";
  const productImageUrl =
    process.env.NEXT_PUBLIC_PRODUCT_IMAGE_URL || "/product-image.jpg";

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="lg:items-start lg:gap-x-8 lg:grid lg:grid-cols-2">
          {/* Product image */}
          <div className="flex flex-col">
            <div className="rounded-lg w-full aspect-h-1 aspect-w-1 overflow-hidden">
              <Image
                src={productImageUrl}
                alt={productName}
                width={800}
                height={800}
                className="w-full h-full object-center object-cover"
                priority
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 sm:mt-16 lg:mt-0 px-4 sm:px-0">
            <h1 className="font-extrabold text-gray-900 text-3xl tracking-tight">
              {productName}
            </h1>

            <div className="mt-6">
              <h2 className="sr-only">Product description</h2>
              <div className="space-y-6 text-gray-700 text-base">
                <p>{productDescription}</p>
              </div>
            </div>

            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
