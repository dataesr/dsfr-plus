import { Argument } from "classnames";
import { HeadingTags } from "../../types/headings";
import { Merge } from "../../types/polymophic";
export type AccordionCss = {
    title?: Argument;
    button?: Argument;
};
export type AccordionBaseProps = {
    title: React.ReactNode | ((expended: boolean) => React.ReactNode);
    titleAs?: HeadingTags;
    className?: Argument;
    css?: AccordionCss;
    defaultExpanded?: boolean;
};
export type AccordionProps = Merge<React.HTMLAttributes<HTMLButtonElement>, AccordionBaseProps>;
export declare const Accordion: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLButtonElement>, keyof AccordionBaseProps> & AccordionBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Accordion.d.ts.map