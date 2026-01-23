import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SuggestedProducts = async () => {
	const products = await getProducts();
	await sleep(5000);

	return (
		<div>
			<h2 className="mb-2">Suggested Products:</h2>
			<ProductList products={products.slice(-4)} />
		</div>
	);
};

export default SuggestedProducts;
