import { Element } from "./Element";
export type Component<Props> = (props: Props) => Element;
