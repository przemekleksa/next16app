import { type ProductListItemDescProps } from "@/ui/types/types";

export const getProducts = async () => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products");
	const products = (await response.json()) as ProductListItemDescProps["product"][];

	return products;
};

export const getProduct = async ({ productId }: { productId: string }) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const product = (await response.json()) as ProductListItemDescProps["product"];

	return product;
};
