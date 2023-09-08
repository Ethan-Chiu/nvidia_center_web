import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup, 
  SelectLabel
} from "@/components/ui/select"
import { useTranslation } from "react-i18next";

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
  placeholder: string;
  optionValues: string[];
  optionElements: string[];
}

export default function LanguageSelectorIsland(props: Props) {
  	const { t } = useTranslation<string>("translation");

	return (
		<Select onValueChange={(value) => location.assign(value)}>
			<SelectTrigger className="w-[180px]">
			<h1 className="text-muted-foreground">{t("nav.language")}:</h1><SelectValue placeholder={props.placeholder} />
			</SelectTrigger>
			<SelectContent>
			<SelectGroup>
				<SelectLabel>{t("nav.language")}</SelectLabel>
				{
				props.optionValues?.map((value: string, i: number) => {
					return (
					<a key={value} href={value}>
						<SelectItem value={value}>{props.optionElements[i]}</SelectItem>
					</a>
					);
				})
				}
			</SelectGroup>
			</SelectContent>
		</Select>
	);
}

