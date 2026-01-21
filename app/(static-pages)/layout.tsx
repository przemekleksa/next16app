import React from "react";

const StaticLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="mx-auto max-w-lg text-center" data-testid="static-layout">
			{children}
		</div>
	);
};

export default StaticLayout;
