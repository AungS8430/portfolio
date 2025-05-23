"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import {useIsSSR} from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
	className?: string;
	classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
	className,
	classNames,
}) => {
	const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const {
		Component,
		slots,
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch({
		isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
		onChange,
	});

	return (
		<Component
			{...getBaseProps({
				className: clsx(
					"px-px transition-opacity hover:opacity-80 cursor-pointer",
					className,
					classNames?.base
				),
			})}
		>
			<span style={{ position: "absolute", width: "1px", height: "1px", margin: "-1px", padding: "0", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: "0" }}>
				<input {...getInputProps()} />
			</span>
			<div
				{...getWrapperProps()}
				className={slots.wrapper({
					class: clsx(
						[
							"w-auto h-auto",
							"bg-transparent",
							"rounded-lg",
							"flex items-center justify-center",
							"group-data-[selected=true]:bg-transparent",
							"!text-default-500",
							"pt-px",
							"px-0",
							"mx-0",
						],
						classNames?.wrapper
					),
				})}
			>
			 {!isSelected || isSSR ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
			</div>
		</Component>
	);
};
