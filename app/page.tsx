"use client"

import React from "react";
import NextLink from "next/link";
import { Image, Divider, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Skeleton, Input } from "@heroui/react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	FiverrIcon,
	MailIcon,
	ExternalLink
} from "@/components/icons";
import { Typewriter } from 'nextjs-simple-typewriter';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@heroui/button";

export default function Home() {
	const [state, handleSubmit] = useForm(process.env.FORMSPREE!);
	if (state.succeeded) {
		return (
			<div className="py-8 pt-0 flex flex-col gap-8 items-center justify-center text-center h-screen">
				<h1 className={title()}>Thanks for reaching out!<br />I&apos;ll reply as soon as I&apos;m available.</h1>
				<Link href="/" aria-label="contact">
					<Button color="primary" variant="solid" size="lg"><b className="text-xl">Go back</b></Button>
				</Link>
			</div>
		);
	}
	return (
		<div className="relative flex flex-col items-center snap-y snap-mandatory overflow-y-scroll w-full h-screen no-scrollbar scroll-smooth p-2">
			<section className="flex flex-col items-center justify-center gap-4 min-h-screen h-screen w-full snap-center" id="home">
				<div className="inline-block w-full text-center justify-center">
					<h1 className={title()}>Hi, I&apos;m&nbsp;</h1>
					<h1 className={title({ color: "blue" })}><span className="font-black">AungS8430</span></h1>
					<br />
					<h1 className={title()}>
						I&apos;m a <span className={title({ color: "blue" })}>
							<Typewriter
								words={["Coder", "Web Developer", "Student", "Thinkpad enthusiast"]}
								loop={0}
								cursor
								cursorStyle="_"
								typeSpeed={50}
								deleteSpeed={70}
								delaySpeed={1000}
							/>
						</span>
					</h1>
					<h2 className={subtitle({ class: "mt-5" })}>
						I love coding cool stuffs. I&apos;m learning new things everyday!
					</h2>
				</div>
				<div className="flex gap-3">
					<Link href="#contact" aria-label="contact">
						<Button color="primary" variant="solid"><b>Contact Me!</b></Button>
					</Link>
					<Link href="https://www.github.com/AungS8430" aria-label="github" className="hidden sm:flex">
						<Button variant="bordered" radius="full" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
					</Link>
					<Link href="https://discord.com/channels/@me/877190769159589988" aria-label="discord" className="hidden sm:flex">
						<Button variant="bordered" radius="full" startContent={<DiscordIcon size={20} />}><b>Discord</b></Button>
					</Link>
					{/* <Link href=" https://www.fiverr.com/aungs8430" aria-label="fiverr" className="hidden sm:flex">
						<Button variant="bordered" radius="full" startContent={<FiverrIcon size={20} />}><b>Fiverr</b></Button>
					</Link> */}
				</div>
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 min-h-screen h-screen w-full snap-center" id="about">
				<Image src="/about.png" alt="Cover" className="hidden sm:flex" width={1200} height={1200} style={{ objectFit: "contain" }} />
				<section className="flex flex-col items-start justify-start text-start gap-4">
					<h1 className={title()}>About Me?!</h1>
					<p>Hi! You may, or may not know my name(I guess not!) but you can call me AungS8430. I&apos;m currently a student at KOSEN-KMITL. I started coding because I wanted to code a Discord bot, I guess I&apos;ve come so far! If you wanna ask questions or just wanna talk, please don&apos;t hesitate to reach me out!</p>
				</section>
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 min-h-screen h-screen w-full snap-center" id="education">
				<section className="flex flex-col items-start justify-start text-start gap-4">
					<h1 className={title()}>Education</h1>
					<section className="flex flex-col items-start text-start justify-start gap-0">
						<Tabs aria-label="Education" className="w-full">
							<Tab title="2024-Present" key="cur">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2024-Present</h1>
										<p>Currently studying computer engineering at KOSEN-KMITL. It&apos;s kind of like an engineering school similar to Japanese KOSEN, so I get to learn Japanese as well.</p>
									</CardBody>
								</Card>
							</Tab>
							<Tab title="2021-2024" key="sec">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2021-2024</h1>
										<p>Studied GATE Program at Suankularb Wittayalai School, mostly focused on subjects like Mathematics, Sciences, etc. But I prefer Computer class.</p>
									</CardBody>
								</Card>
							</Tab>
							<Tab title="2021-2015" key="pri">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2021-2015</h1>
										<p>I used to study primary school at Saint Gabriel&apos;s College, I learnt a lot of stuffs back there, I love the I.E. classes so much that I still miss them even after I left 2021.</p>
									</CardBody>
								</Card>
							</Tab>
						</Tabs>
					</section>
				</section>
				<Image src="/education.png" alt="Cover" className="hidden sm:flex" width={1200} height={1200} style={{ objectFit: "contain" }} />
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 min-h-screen h-screen w-full snap-center" id="projects">
				<section className="flex flex-col items-end justify-end text-end gap-4 w-full mx-0">
					<h1 className={title()}>Projects</h1>
					<div className="w-full overflow-x-auto">
						<div className="relative text-center flex flex-row w-full gap-2 w-7xl">
							<Card className="w-[277px] justify-between overflow-visible">
								<CardHeader className="p-5 block text-start">
									<p className="font-bold text-lg">whereTfIsMyPip</p>
									<p>GUI package manager for Python. Or simply GUI for PIP. Built as a project with my friend <Link href="https://www.github.com/ryunaja">@ryunaja</Link>.</p>
								</CardHeader>
								<CardBody className="grow p-0" />
								<Divider />
								<CardFooter className="gap-2">
									<Link href="https://www.github.com/AungS8430/whereTfIsMyPip" aria-label="github" className="w-full">
										<Button className="w-full" variant="bordered" radius="md" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
									</Link>
									<Button className="w-full" color="primary" radius="md" isDisabled startContent={<ExternalLink size={20} />}><b>Visit</b></Button>
								</CardFooter>
							</Card>
							<Card className="w-[277px] justify-between overflow-visible">
								<CardHeader className="p-5 block text-start">
									<p className="font-bold text-lg">wordgames.py</p>
									<p>A python module that allow users to play singleplayer and multiplayer games inside a terminal. Built as a project with some of my friends.</p>
								</CardHeader>
								<CardBody className="grow p-0" />
								<Divider />
								<CardFooter className="gap-2">
									<Link href="https://www.github.com/AungS8430/wordgames.py" aria-label="github" className="w-full">
										<Button className="w-full" variant="bordered" radius="md" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
									</Link>
									<Button className="w-full" color="primary" radius="md" isDisabled startContent={<ExternalLink size={20} />}><b>Visit</b></Button>
								</CardFooter>
							</Card>
							<Card className="w-[277px] justify-between overflow-visible">
								<CardHeader className="p-5 block text-start">
									<p className="font-bold text-lg">Musicallied</p>
									<p>Discord.js bot written in Node.js, its purpose is to update users with top charts, lyrics, artists, and more!</p>
								</CardHeader>
								<CardBody className="grow p-0" />
								<Divider />
								<CardFooter className="gap-2">
									<Link href="https://www.github.com/AungS8430/Musicallied" aria-label="github" className="w-full">
										<Button className="w-full" variant="bordered" radius="md" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
									</Link>
									<Button className="w-full" color="primary" radius="md" isDisabled startContent={<ExternalLink size={20} />}><b>Visit</b></Button>
								</CardFooter>
							</Card>
							<Card className="w-[277px] justify-between overflow-visible">
								<CardHeader className="p-5 block text-start">
									<p className="font-bold text-lg">Suankularb Website</p>
									<p>A prototype of Suankularb Wittayalai School website built in collaboration w/ my friend, <Link href="https://www.github.com/haruhash">@haruhash</Link>.</p>
								</CardHeader>
								<CardBody className="grow p-0" />
								<Divider />
								<CardFooter className="gap-2">
									<Link href="https://www.github.com/suankularb-website-project/main" aria-label="github" className="w-full">
										<Button className="w-full" variant="bordered" radius="md" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
									</Link>
									<Link href="https://suankularb.aungs.eu.org" aria-label="github" className="w-full">
										<Button className="w-full" color="primary" radius="md" startContent={<ExternalLink size={20} />}><b>Visit</b></Button>
									</Link>
								</CardFooter>
							</Card>
							<Card className="w-[277px] justify-between overflow-visible">
								<CardHeader className="p-5 block text-start">
									<p className="font-bold text-lg">Recipe Lookup</p>
									<p>A web application that helps you find and plan healthy meals.</p>
								</CardHeader>
								<CardBody className="grow p-0" />
								<Divider />
								<CardFooter className="gap-2">
									<Link href="https://www.github.com/AungS8430/RecipeLookup" aria-label="github" className="w-full">
										<Button className="w-full" variant="bordered" radius="md" startContent={<GithubIcon size={20} />}><b>Github</b></Button>
									</Link>
									<Link href="https://recipe-lookup.aungs.eu.org" aria-label="github" className="w-full">
										<Button className="w-full" color="primary" radius="md" startContent={<ExternalLink size={20} />}><b>Visit</b></Button>
									</Link>
								</CardFooter>
							</Card>
							<br />
						</div>
					</div>
				</section>
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 min-h-screen h-screen w-full snap-center" id="services">
				<section className="flex flex-col items-start justify-start text-start gap-4 w-full mx-0">
					<h1 className={title()}>Services <span className="text-stone-500">Coming soon!</span></h1>
					<div className="w-full">
						<div className="relative text-center">
							<Skeleton className="relative rounded-lg w-full h-48 z-1"/>
							<br />
						</div>
					</div>
				</section>
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 min-h-screen h-screen w-full snap-center" id="contact">
				<section className="flex flex-col sm:flex-row items-start justify-start text-start gap-4 w-full mx-0">
					<section className="flex flex-col items-start justify-start text-start gap-4 w-full mx-0">
						<h1 className={title()}>Contact me!</h1>
						<h2 className={subtitle()}>You can send me an Email and I&apos;ll respond as soon as I am available, or fill in the form and I&apos;ll reach you out!<br /><b>Email:</b> <Link isExternal href="mailto:contact@aungs.eu.org" showAnchorIcon>contact@aungs.eu.org</Link></h2>
					</section>
					<section className="w-full">
						<form onSubmit={handleSubmit} className="w-full gap-2 flex flex-col">
							<Input
								type="text"
								label="Name"
								name="name"
								placeholder="John Doe"
								labelPlacement="inside"
								isInvalid={!!state.errors}
								isRequired
							/>
							<Input
								type="email"
								name="email"
								label="Email"
								placeholder="you@example.com"
								labelPlacement="inside"
								isInvalid={!!state.errors}
								isRequired
								endContent={
									<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
								}
							/>
							<Input
								type="text"
								name="message"
								label="Message"
								placeholder="Hi! I&apos;d like to..."
								labelPlacement="inside"
								isInvalid={!!state.errors}
								isRequired
							/>
							<Button color="primary" variant="ghost" type="submit" disabled={state.submitting}><b>Send</b></Button>
						</form>
					</section>
				</section>
			</section>
			<section className="grid w-full items-center justify-center py-3 snap-center">
				<p className="text-default-600 text-center">Coded with ❤️ by&nbsp;<span className="text-primary">AungS8430</span></p>
				<Snippet hideSymbol hideCopyButton variant="flat" className="hidden md:flex">
					<span className="font-bold">Credits:</span>
					<span><Link href="https://react.dev"><Code color="primary">React</Code></Link> Open-source front-end JavaScript library for building UI based on components.</span>
					<span><Link href="https://nextjs.org"><Code color="primary">Next.js</Code></Link> Web development framework based on React, built by Vercel.</span>
					<span><Link href="https://tailwindcss.com"><Code color="primary">Tailwind CSS</Code></Link> CSS framework that allows developers to use CSS properties directly inside HTML.</span>
					<span><Link href="https://nextui.org"><Code color="primary">NextUI</Code></Link> Beautiful, fast and modern React UI library.</span>
					<span><Link href="https://github.com/SoloReverse/nextjs-simple-typewriter"><Code color="primary">NextJs Simple Typewriter</Code></Link> Fork of <Link href="https://github.com/awran5/react-simple-typewriter">React Simple Typewriter</Link> with Next.js compability.</span>
					<span><Link href="https://icons8.com/"><Code color="primary">Icons8</Code></Link> Provider of icons used in this website, this includes <Link href="https://icons8.com/icon/14h574ySQ7kG/fiverr">Fiverr</Link>.</span>
					<span><Link href="https://www.iconfinder.com/"><Code color="primary">Iconfinder</Code></Link> Provider of 3d illustrations used in this website.</span>
				</Snippet>
			</section>
		</div>
	);
}
