import { Geist, Geist_Mono } from "next/font/google";
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
					{children}
				</div>
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
