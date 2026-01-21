import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemDescProps } from "@/ui/types/types";

export const ProductList = ({ products }: { products: ProductListItemDescProps["product"][] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
