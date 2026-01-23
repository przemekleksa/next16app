import { Suspense } from "react";
import { getProduct, getProducts } from "@/api/products";
import SuggestedProducts from "@/ui/organisms/SuggestedProducts";
import { formatPrice } from "@/utils/utils";

interface SingleProductPageProps {
	params: Promise<{ productId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateStaticParams = async () => {
	const products = await getProducts();
	return products.map((product) => ({ productId: product.id }));
};

export const metadata = {};

const SingleProductPage = async ({ params, searchParams }: SingleProductPageProps) => {
	const { productId } = await params;
	const search = await searchParams;
	const referral = search.referral?.toString();
	console.log(productId, referral);

	const product = await getProduct({ productId });
	console.log(product);

	return (
		<>
			<div className="flex flex-col">
				<img src={product.image} alt={product.title} />
				<div className="mt-2 flex flex-col">
					<div className="mb-2 flex flex-row justify-between">
						<h2>{product.title}</h2>
						<p className="text-green-500">{formatPrice(Number(product.price) / 100)}</p>
					</div>

					<p>{product.description}</p>
					<div className="mt-2 flex flex-row justify-between">
						<p>{product.category}</p>
						<p>
							Score: {product.rating.rate} from: {product.rating.count}
						</p>
					</div>
				</div>
			</div>
			<aside className="mt-6">
				<Suspense fallback={<div>Loading...</div>}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
};

export default SingleProductPage;
