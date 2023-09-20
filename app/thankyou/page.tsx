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
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className={title()}>Thank you for contacting me!</h1>
		</div>
	);
}
