"use client"

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	FiverrIcon
} from "@/components/icons";

import { Logo } from "@/components/icons";
import React from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<div className='flex flex-col sticky top-0 z-50'>
			<NextUINavbar maxWidth="lg" position="sticky" onMenuOpenChange={setIsMenuOpen} isBordered className="z-50 top-0">
				<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden"
					/>
					<NavbarBrand as="li" className="gap-3 max-w-fit">
						<NextLink className="flex justify-start items-center gap-1" href="/">
							<p className="font-bold text-inherit">AungS8430</p>
						</NextLink>
					</NavbarBrand>
					<NavbarMenu className="hidden sm:flex gap-4 justify-start ml-2">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						))}
					</NavbarMenu>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex gap-4"
					justify="center"
				>
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</NavbarContent>

				<NavbarContent
					className="basis-1/5 sm:basis-full"
					justify="end"
				>
					<NavbarItem className="flex gap-2">
						<ThemeSwitch className="hidden md:flex" />
						<Link isExternal href="https://www.github.com/AungS8430" aria-label="Github" className="hidden md:flex">
							<GithubIcon className="text-default-500" />
						</Link>
						<Link isExternal href="https://discord.com/channels/@me/877190769159589988" aria-label="Discord" className="hidden md:flex">
							<DiscordIcon className="text-default-500" />
						</Link>
						<Link href="#contact" aria-label="contact">
							<Button color="primary" variant="solid"><b>Contact Me!</b></Button>
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NextUINavbar>
		</div>
		
	);
};
