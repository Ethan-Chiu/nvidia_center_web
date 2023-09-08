import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup, 
  SelectLabel
} from "@/components/ui/select"

interface Props extends astroHTML.JSX.SelectHTMLAttributes {
  optionValues: string[];
  optionElements: string[];
}

export default function LanguageSelectorIsland(props: Props) {


return (
<Select onValueChange={(value) => location.assign(value)}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Language</SelectLabel>
        {
          props.optionValues?.map((value: string, i: number) => {
            return (
              <a href={value}>
              <SelectItem key={value} value={value}>{props.optionElements[i]}</SelectItem></a>
            );
          })
        }
      </SelectGroup>
    </SelectContent>
  </Select>
);
}

