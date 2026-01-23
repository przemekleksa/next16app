export interface ProductListItemDescProps {
	product: {
		id: string;
		title: string;
		price: string;
		description: string;
		category: string;
		rating: {
			rate: number;
			count: number;
		};
		image: string;
		longDescription: string;
	};
}
