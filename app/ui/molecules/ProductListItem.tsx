import Link from "next/link";
import { type ProductListItemDescProps } from "@/ui/types/types";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

interface ProductListItemProps {
	product: ProductListItemDescProps["product"];
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const { image, title, id } = product;

	return (
		<Link href={`/product/${id}`}>
			<li>
				<article>
					<ProductCoverImage src={image} alt={title} />
					<ProductListItemDescription product={product} />
				</article>
			</li>
		</Link>
	);
};
