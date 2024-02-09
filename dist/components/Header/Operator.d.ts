import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
interface OperatorCss {
    "fr-responsive-img"?: Argument;
}
export type OperatorBaseProps = {
    className?: Argument;
    css?: OperatorCss;
};
export type OperatorProps = Merge<React.HTMLAttributes<HTMLImageElement>, OperatorBaseProps>;
export declare const Operator: ({ className, css, ...props }: OperatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Operator.d.ts.map