import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

const Page = async () => {
	return (
		<div className="row-auto flex flex-col gap-4">
			<Link href="/test2" className="hover:underline">
				test2
			</Link>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
};

export default Page;
