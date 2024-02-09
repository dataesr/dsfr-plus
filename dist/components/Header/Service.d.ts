import { Merge } from "../../types/polymophic";
import { Argument } from "classnames";
type ServiceCss = {
    "fr-header__service-title"?: Argument;
    "fr-header__service-tagline"?: Argument;
};
export type ServiceBaseProps = {
    className?: Argument;
    css?: ServiceCss;
    name: string;
    tagline?: string;
    href?: string;
};
export type ServiceProps = Merge<React.HTMLAttributes<HTMLAnchorElement>, ServiceBaseProps>;
export declare const Service: ({ href, name, tagline, className, css, ...props }: ServiceProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Service.d.ts.map