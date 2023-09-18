import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-mono antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex flex-col">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="grid w-full items-center justify-center py-3">
							<p className="text-default-600 text-center">Coded by&nbsp;<span className="text-primary">AungS8430</span></p>
							<Snippet hideSymbol hideCopyButton variant="flat" className="hidden md:flex">
								<span className="font-bold">Credits:</span>
								<span><Link href="https://react.dev"><Code color="primary">React</Code></Link> Open-source front-end JavaScript library for building UI based on components.</span>
								<span><Link href="https://nextjs.org"><Code color="primary">Next.js</Code></Link> Web development framework based on React, built by Vercel.</span>
								<span><Link href="https://tailwindcss.com"><Code color="primary">Tailwind CSS</Code></Link> CSS framework that allows developers to use CSS properties directly inside HTML.</span>
								<span><Link href="https://nextui.org"><Code color="primary">NextUI</Code></Link> Beautiful, fast and modern React UI library.</span>
								<span><Link href="https://github.com/SoloReverse/nextjs-simple-typewriter"><Code color="primary">NextJs Simple Typewriter</Code></Link> Fork of <Link href="https://github.com/awran5/react-simple-typewriter">React Simple Typewriter</Link> with Next.js compability.</span>
								<span><Link href="https://icons8.com/"><Code color="primary">Icons8</Code></Link> Provider of icons used in this website, this includes <Link href="https://icons8.com/icon/14h574ySQ7kG/fiverr">Fiverr</Link>.</span>
								<span><Link href="https://icons8.com/"><Code color="primary">Iconfinder</Code></Link> Provider of 3d illustrations used in this website.</span>
							</Snippet>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
