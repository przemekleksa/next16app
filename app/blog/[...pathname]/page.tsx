interface BlogPageProps {
	params: Promise<{ pathname: string[] }>;
}

const BlogPage = async ({ params }: BlogPageProps) => {
	const pathname = (await params).pathname.join("/");
	console.log(pathname);

	return <div>BlogPage: {pathname}</div>;
};

export default BlogPage;
