"use client";

import { useState } from "react";

export const ProductCounter = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0);

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
