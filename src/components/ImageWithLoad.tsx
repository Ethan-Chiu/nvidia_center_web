import { useEffect, useRef, useState, type ReactEventHandler, type LegacyRef } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	src: string;
	alt?: string;
}

const useImageLoaded = (): [LegacyRef<HTMLImageElement>, boolean, ReactEventHandler<HTMLImageElement>] => {
	const [loaded, setLoaded] = useState(false);
	const ref = useRef<HTMLImageElement>(null);

	const onLoad = () => {
		setLoaded(true);
	};

	useEffect(() => {
		if (ref.current && ref.current.complete) {
			onLoad();
		}
	});

	return [ref, loaded, onLoad];
};

export default function ImageWithLoad({ className, ...attr }: Props) {
	const [ref, loaded, onLoad] = useImageLoaded();

	return (
		<>
			<img
				ref={ref}
				className={cn("absolute h-full w-full", className)}
				{...attr}
				onLoad={onLoad}
			/>
			{!loaded && (
				<Skeleton
					className={cn(
						"absolute h-full w-full z-10 bg-secondary", className
					)}
				/>
			)}
		</>
	);
}
