import "./card.css"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
	title: string;
	body: string;
	href: string;
	imageSrc: string;
}

export default function Card( { href, title, body, imageSrc } : Props) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<li className="link-card">
					<a href={href} className="w-full bg-secondary leading-normal rounded-md">
						<div className="flex flex-col justify-center items-center sm:flex-row sm:items-start">
							<img
								className="object-cover h-40 w-32 rounded-md shadow-2xl transform -translate-y-4 border-4 border-ring"
								src={imageSrc}
								alt={title}
							/>
							<div className="grow px-4 flex-col text-foreground divide-foreground divide-y-2">
								<p className="text-xl text-center font-bold">{title}</p>
								<p className="px-4 py-4 text-sm text-left">
									{body}
								</p>
							</div>
						</div>
					</a>
				</li>
			</HoverCardTrigger>
			<HoverCardContent className="w-full m-0 p-1" align="end">
				<div className="relative p-0">
					<Badge className="absolute -top-8 left-3" variant="destructive">Visit {title}'s website!</Badge>
					<iframe src={href}></iframe>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

