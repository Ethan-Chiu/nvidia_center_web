import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { ThemeToggle } from "./ThemeSelector";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { useTranslation } from "react-i18next";

const navMotion = {
	visible: {
		opacity: 1,

		transition: {
			when: "beforeChildren",
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
	},
};
const itemMotion = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 1, x: 0 },
};

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = 1 + i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				delay: 1,
				pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

interface NavLinkData {
	name: string;
    href: string;
    id: number;
}

const NavLinks = ({
	isMobile,
	className,
	navLinks
}: {
	isMobile: boolean;
	className: string;
	navLinks: NavLinkData[]
}) => (
	<NavigationMenu>
		<NavigationMenuList className={className}>
			{navLinks.map(({ name, href, id }) => (
				<motion.div key={id} variants={isMobile ? itemMotion : itemMotionDesktop}>
					<NavigationMenuItem>
						<a href={href}>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							{name}
							</NavigationMenuLink>
						</a>
					</NavigationMenuItem>
				</motion.div>
			))}
		</NavigationMenuList>
	</NavigationMenu>
);

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
	languageSelector?: ReactNode
}

export default function Nav(props: Props) {
	const [toggled, setToggled] = useState(false);
	const { t } = useTranslation<string>("translation");

	// Links
	const navLinks: NavLinkData[] = [
		{ name: t("nav.home"), href: "/", id: 1 },
		{ name: "Timeline", href: "/timeline", id: 2 },
		{ name: t("nav.contact"), href: "/contact", id: 3 },
	];

	return (
		<nav className="relative mx-8 mb-12 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-20">
			{/* Title */}
			<CompTitle title={t("nav.title")}/>

			<div className="flex gap-x-4">
				<ThemeToggle/>
				<div>
					{props.languageSelector}
				</div>
			
				{/* Nav Items animating in  */}
				{toggled && (
					<motion.div
						variants={navMotion}
						animate="visible"
						initial="hidden"
						className="fixed left-0 top-0 z-40 flex h-screen
			w-full flex-col items-center justify-center gap-24 bg-white text-2xl font-bold"
					>
						<NavLinks
							className="flex flex-col gap-16 text-lg"
							navLinks={navLinks}
							isMobile={true}
						/>
					</motion.div>
				)}
				{/* nav link on large screen */}
				<motion.div
					initial={{ opacity: 0, x: 25 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.35 }}
					className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg"
				>
					<NavLinks className="flex gap-4" navLinks={navLinks} isMobile={false} />
				</motion.div>

				{/* Hamburger Toggle */}
				<CompBurger isOpen={toggled} onClick={() => {setToggled((prevToggle) => !prevToggle)}}/>
			</div>
		</nav>
	);
}


function CompBurger({isOpen, onClick}: {isOpen: boolean, onClick: () => void}) {
	return <motion.div
		animate={{ opacity: 1, x: 0 }}
		initial={{ opacity: 0, x: 25 }}
		transition={{ delay: 0.35 }}
		onClick={onClick}
		className={`flex z-50 cursor-pointer items-center xl:hidden`}
	>
		<div className="space-y-1.5 ">
			<motion.span
				animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
				className="line-1 rounded block h-0.5 w-7 bg-foreground"
			></motion.span>

			<motion.span
				animate={{ width: isOpen ? 0 : 20 }}
				className="line-2 rounded block h-0.5 w-5 bg-foreground"
			></motion.span>
			<motion.span
				animate={{
					rotateZ: isOpen ? -45 : 0,
					y: isOpen ? -8 : 0,
					width: isOpen ? 28 : 12,
				}}
				className="line-3 rounded block h-0.5 w-4 bg-foreground"
			></motion.span>
		</div>
	</motion.div>;
}

function CompTitle({title}: {title: string}) {
	return (
		<div className="relative h-10 w-40">
			<motion.svg
				initial="hidden"
				animate="visible"
				className="h-full w-full"
				preserveAspectRatio="none"
			>
				<motion.rect
					x="0"
					y="0"
					variants={draw}
					className="h-full w-full fill-transparent stroke-foreground stroke-[5px]"
					strokeLinecap="square" />
			</motion.svg>
			<div className="absolute top-0 flex h-full w-full justify-center p-1">
				<h1 className="text-lg font-bold">
					<a href="/">{title}</a>
				</h1>
			</div>
		</div>
	);
}

