import { Geist, Geist_Mono } from "next/font/google";
import ActiveLink from "@/ui/atoms/ActiveLink";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next 16",
	description: "Your new shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 text-gray-200 antialiased dark:bg-black`}
			>
				<nav>
					<ul className="mt-2 flex justify-center gap-4">
						<li>
							<ActiveLink href="/" styles="text-blue-500 hover:text-blue-600 hover:underline">
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/products"
								styles="text-blue-500 hover:text-blue-600 hover:underline"
							>
								Products
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
					{children}
				</main>
				<footer className="flex h-24 min-h-32 w-full items-center justify-center border-t">
					<a
						className="flex items-center justify-center text-sm text-gray-500 hover:underline dark:text-gray-400"
						href="https://github.com/vercel/next.js"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{" "}
						<span className="ml-2 h-4 w-4">
							<img src="/vercel.svg" alt="Vercel Logo" className="dark:invert" />
						</span>
					</a>
				</footer>
			</body>
		</html>
	);
}
