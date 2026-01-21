interface Page1layoutProps {
	children: React.ReactNode;
}

const Page1layout = ({ children }: Page1layoutProps) => {
	return <div className="text-gray-200">Page1layout {children}</div>;
};

export default Page1layout;
