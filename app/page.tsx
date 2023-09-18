"use client"

import NextLink from "next/link";
import { Image, Divider, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
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
	FiverrIcon
} from "@/components/icons";
import { Typewriter } from 'nextjs-simple-typewriter';
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-2xl text-center justify-center">
					<h1 className={title()}>Hi, I'm&nbsp;</h1>
					<h1 className={title({ color: "blue" })}><span className="font-black">AungS8430</span></h1>
					<br />
					<h1 className={title()}>
						I'm a <span className={title({ color: "blue" })}>
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
						I love coding cool stuffs. I'm learning new things everyday!
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
					<p>Hi! You may, or may not know my name(I guess not!) but you can call me AungS8430. I'm currently a student at Suankularb Wittayalai School. I'm 14 years old, I started coding when I was 11, because I wanted to code a Discord bot, I guess I've come so far! If you wanna ask questions or just wanna talk, please don't hesitate to reach me out!</p>
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
										<p>Currently studying GATE Program at Suankularb Wittayalai School, mostly focused on subjects like Mathematics, Sciences, etc. But I prefer Computer class. I'm also taking Harvard's CS50x at the moment.</p>
									</CardBody>
								</Card>
							</Tab>
							<Tab title="2021-2015" key="pri">
								<Card>
									<CardBody>
										<h1 className="text-2xl font-bold">2011-2015</h1>
										<p>I had been studying in Saint Gabriel's College for primary school, I learnt a lot of stuffs back there, I love the I.E. classes so much that I still miss them even after I moved out in 2021.</p>
									</CardBody>
								</Card>
							</Tab>
						</Tabs>
					</section>
				</section>
				<Image src="/education.png" width={1200} height={1200} alt="Cover" className="hidden sm:flex" />
			</section>
			<Divider className="my-4" />
		</div>
	);
}
