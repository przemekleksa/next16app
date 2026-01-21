"use client";

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const ProductCounter = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0);
	const router = useRouter();

	const params = useParams();
	const searchParams = useSearchParams().getAll("test");
	const pathname = usePathname();

	console.log("%c router", "color: blue", router);
	console.log("%c searchParams", "color: green", searchParams);
	console.log("%c params", "color: red", params);
	console.log("%c pathname", "color: orange", pathname);

	// const isLoggedIn = () => {
	// 	return true;
	// };

	// useEffect(() => {
	// 	if (isLoggedIn()) {
	// 		router.push("/test2");
	// 	}
	// }, []);

	return (
		<div>
			<button className="border px-4" onClick={() => setCount(count - 1)}>
				-
			</button>
			<input readOnly value={count} className="border border-slate-200 text-center" />
			<button className="border px-4" onClick={() => setCount(count + 1)}>
				+
			</button>
			{/* <TestServer /> */}
			{count % 2 === 0 && children}
		</div>
	);
};
