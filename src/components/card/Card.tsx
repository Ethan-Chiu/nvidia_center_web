import "./card.css";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import ImageWithLoad from "../ImageWithLoad";

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
	title: string;
	href: string;
	imageSrc: string;
	body?: ReactNode;
}

export default function Card({ href, title, imageSrc, body }: Props) {
	const { t } = useTranslation<string>("translation");

	return (
		<HoverCard key={imageSrc} openDelay={700}>
			<li className="link-card">
				<div className="w-full rounded-md bg-secondary leading-normal">
					<div className="flex flex-col h-full w-full items-center justify-center sm:flex-row sm:items-start">
						<div className="w-32 shrink-0">
							<div className="relative h-40 w-32 -translate-y-4 transform">
								<ImageWithLoad key={imageSrc} className="object-cover rounded-md border-4 border-ring shadow-2xl"
									src={imageSrc}
									alt={title}
								/>
							</div>
						</div>
						<div className="grow flex-col px-4 text-foreground">
							<p className="text-center text-xl font-bold">
								{title}
							</p>
							<Separator className="bg-foreground" />
							{/* info */}
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
						{`${t("card.visit")} ${title} ${t("card.s_web")}`}
					</Badge>
					<iframe src={href}></iframe>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
