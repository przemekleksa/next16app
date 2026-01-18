import { type ProductListItemDescProps } from "@/ui/types/types";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

interface ProductListItemProps {
	product: ProductListItemDescProps["product"];
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const {
		coverImage: { src },
		coverImage: { alt },
	} = product;

	return (
		<li>
			<article>
				<ProductCoverImage src={src} alt={alt} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
