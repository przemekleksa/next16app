export interface ProductListItemDescProps {
	product: {
		id: string;
		name: string;
		category: string;
		price: string;
		coverImage: { src: string; alt: string };
	};
}
