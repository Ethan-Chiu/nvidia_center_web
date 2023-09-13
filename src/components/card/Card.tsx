import "./card.css";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
	title: string;
	href: string;
	imageSrc: string;
	description: string;
	body?: ReactNode;
}

export default function Card({
	href,
	title,
	imageSrc,
	body,
}: Props) {
	return (
		<HoverCard openDelay={700}>
			<li className="link-card">
				<div className="relative w-full rounded-md bg-secondary leading-normal">
					<div className="flex flex-col items-center justify-center sm:flex-row sm:items-start">
						<img
							className="h-40 w-32 -translate-y-4 transform rounded-md border-4 border-ring object-cover shadow-2xl"
							src={imageSrc}
							alt={title}
						/>
						<div className="grow flex-col px-4 text-foreground">
							<p className="text-center text-xl font-bold">
								{title}
							</p>
							<Separator className="bg-foreground"/>
							{body}
							<div className="flex justify-end">
								<HoverCardTrigger asChild>
									<a
										href={href}
										target="_blank"
										className={cn(
											buttonVariants({ variant: "link" }),
											"m-2 h-5 w-5 p-0",
										)}
									>
										<ExternalLink />{" "}
									</a>
								</HoverCardTrigger>
							</div>
						</div>
					</div>
				</div>
			</li>
			<HoverCardContent className="m-0 w-full p-1" align="end">
				<div className="relative p-0">
					<Badge
						className="absolute -top-8 left-3"
						variant="destructive"
					>
						Visit {title}'s website!
					</Badge>
					<iframe src={href}></iframe>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
