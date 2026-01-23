type CategoryProductPageProps = {
	params: Promise<{
		category: string;
		pageNumber: string;
	}>;
};

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	const { category } = params;
	console.log(category);
	if (category === "t-shirts") {
		return [
			{
				pageNumber: "1",
			},
			{
				pageNumber: "2",
			},
		];
	} else if (category === "boots") {
		return [{ pageNumber: "1" }];
	}
	return [];
};

export const CategoryProductPage = async ({ params }: CategoryProductPageProps) => {
	const { category, pageNumber } = await params;

	return (
		<div>
			<h1>
				Products from {category}, page {pageNumber}
			</h1>
		</div>
	);
};

export default CategoryProductPage;
