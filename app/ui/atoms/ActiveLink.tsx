"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({
	href,
	styles,
	children,
}: {
	href: string;
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
