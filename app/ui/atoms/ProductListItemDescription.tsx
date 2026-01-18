import { type ProductListItemDescProps } from "@/ui/types/types";
import { formatPrice } from "@/utils/utils";

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProductListItemDescProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900 dark:text-green-300">
				<span className="sr-only">Cena:</span> {formatPrice(Number(price) / 100)}
			</p>
		</div>
	);
};
