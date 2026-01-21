import green from "@/assets/images/green.png";
import maroon from "@/assets/images/maroon.png";
import tshirt from "@/assets/images/tshirt.png";
import yellow from "@/assets/images/yellow.png";
import productsData from "@/assets/products/products.json";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemDescProps } from "@/ui/types/types";

const getSrc = (name: { src: string }) => {
	return name.src;
};

const imageMap = {
	"/assets/images/tshirt.png": getSrc(tshirt),
	"/assets/images/green.png": getSrc(green),
	"/assets/images/yellow.png": getSrc(yellow),
	"/assets/images/maroon.png": getSrc(maroon),
};

const products: ProductListItemDescProps["product"][] = productsData.map((product) => ({
	...product,
	coverImage: {
		...product.coverImage,
		src: imageMap[product.coverImage.src as keyof typeof imageMap],
	},
}));

export default function ProductsPage() {
	return <ProductList products={products} />;
}
