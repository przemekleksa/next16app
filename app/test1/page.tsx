import Link from "next/link";
import { Suspense } from "react";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

const Page = async () => {
	return (
		<div className="row-auto flex flex-col gap-4">
			<Link
				href="/test2"
				className="hover:underline"
				// replace={true}
			>
				test2
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<ProductCounter>
					<TestServer />
				</ProductCounter>
			</Suspense>
		</div>
	);
};

export default Page;
