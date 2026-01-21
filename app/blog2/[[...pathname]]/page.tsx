interface BlogPage2Props {
	params: Promise<{ pathname: string[] }>;
}

const BlogPage2 = async ({ params }: BlogPage2Props) => {
	const pathname = (await params).pathname?.join("/") ?? [];
	console.log(pathname);

	return <div>BlogPage2: {pathname}</div>;
};

export default BlogPage2;
