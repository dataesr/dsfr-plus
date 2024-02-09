import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
type AccordionGroupBaseProps = {
    className?: Argument;
};
export type AccordionGroupProps = Merge<React.HTMLAttributes<HTMLDivElement>, AccordionGroupBaseProps>;
export declare const AccordionGroup: ({ children, className, ...props }: AccordionGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordionGroup.d.ts.map