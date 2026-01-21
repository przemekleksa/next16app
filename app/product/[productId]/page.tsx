interface SingleProductPageProps {
	params: Promise<{ productId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SingleProductPage = async ({ params, searchParams }: SingleProductPageProps) => {
	const { productId } = await params;
	const search = await searchParams;
	const referral = search.referral?.toString();
	// getProductById(productId);
	console.log(productId, referral);

	return (
		<div>
			SingleProductPage: {productId} {referral}
		</div>
	);
};

export default SingleProductPage;
