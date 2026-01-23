export const generateStaticParams = async () => {
	return [
		{
			category: "t-shirts",
		},
		{
			category: "boots",
		},
	];
};

const CategoryProductLayout = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>;
};

export default CategoryProductLayout;
