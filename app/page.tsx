"use client"

import React from "react";
import NextLink from "next/link";
import { Image, Divider, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Skeleton, Input } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	FiverrIcon,
	MailIcon
} from "@/components/icons";
import { Typewriter } from 'nextjs-simple-typewriter';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@nextui-org/button";

export default function Home() {
	const [state, handleSubmit] = useForm(process.env.FORMSPREE!);
	if (state.succeeded) {
		return (
			<div className="py-8 pt-0 flex flex-col gap-8 items-center justify-center text-center">
				<h1 className={title()}>Thanks for reaching out!<br />I&apos;ll reply as soon as I&apos;m available.</h1>
				<Link href="/" aria-label="contact">
					<Button color="primary" variant="solid" size="lg"><b className="text-xl">Go back</b></Button>
				</Link>
			</div>
		)
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-2xl text-center justify-center">
					<h1 className={title()}>Hi, I&apos;m&nbsp;</h1>
					<h1 className={title({ color: "blue" })}><span className="font-black">AungS8430</span></h1>
					<br />
					<h1 className={title()}>
						I&apos;m a <span className={title({ color: "blue" })}>
							<Typewriter
								words={["Coder", "Web Developer", "Backend Developer", "Freelancer", "Designer"]}
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
					<Link href=" https://www.fiverr.com/aungs8430" aria-label="fiverr" className="hidden sm:flex">
						<Button variant="bordered" radius="full" startContent={<FiverrIcon size={20} />}><b>Fiverr</b></Button>
					</Link>
				</div>
			</section>
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10" id="about">
				<Image src="/about.png" width={1200} height={1200} alt="Cover" className="hidden sm:flex" />
				<section className="flex flex-col items-start justify-start text-start gap-4">
					<h1 className={title()}>About Me?!</h1>
					<p>Hi! You may, or may not know my name(I guess not!) but you can call me AungS8430. I&apos;m currently a student at Suankularb Wittayalai School. I&apos;m 14 years old, I started coding when I was 11, because I wanted to code a Discord bot, I guess I&apos;ve come so far! If you wanna ask questions or just wanna talk, please don&apos;t hesitate to reach me out!</p>
				</section>
			</section>
			<Divider className="my-4" />
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10" id="education">
				<section className="flex flex-col items-start justify-start text-start gap-4">
					<h1 className={title()}>Education</h1>
					<section className="flex flex-col items-start text-start justify-start gap-0">
						<Tabs aria-label="Education" className="w-full">
							<Tab title="2021-Present" key="sec">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2021-Present</h1>
										<p>Currently studying GATE Program at Suankularb Wittayalai School, mostly focused on subjects like Mathematics, Sciences, etc. But I prefer Computer class. I&apos;m also taking Harvard&apos;s CS50x at the moment.</p>
									</CardBody>
								</Card>
							</Tab>
							<Tab title="2021-2015" key="pri">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2021-2015</h1>
										<p>I had been studying in Saint Gabriel&apos;s College for primary school, I learnt a lot of stuffs back there, I love the I.E. classes so much that I still miss them even after I moved out in 2021.</p>
									</CardBody>
								</Card>
							</Tab>
						</Tabs>
					</section>
				</section>
				<Image src="/education.png" width={1200} height={1200} alt="Cover" className="hidden sm:flex" />
			</section>
			<Divider className="my-4" />
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 w-full" id="projects">
				<section className="flex flex-col items-end justify-end text-end gap-4 w-full mx-0">
					<h1 className={title()}>Projects <span className="text-stone-500">Coming soon!</span></h1>
					<div className="w-full">
						<div className="relative text-center">
							<Skeleton className="relative rounded-lg w-full h-48 z-1"/>
							<br />
						</div>
					</div>
				</section>
			</section>
			<Divider className="my-4" />
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 w-full" id="services">
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
			<section className="flex flex-row items-center text-center justify-center gap-4 max-w-4xl py-8 md:py-10 w-full" id="contact">
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
		</div>
	);
}
