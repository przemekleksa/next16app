"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const ActiveLink = <T extends string>({
	href,
	styles,
	children,
}: {
	href: Route<T>;
	styles: string;
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={clsx(styles, { "text-red-600": isActive })}>
			{children}
		</Link>
	);
};

export default ActiveLink;
