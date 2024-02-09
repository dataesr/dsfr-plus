import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
type SideMenuLinkCss = {
    "fr-sidemenu__link"?: Argument;
};
export type SideMenuLinkBaseProps = {
    children?: React.ReactNode[] | React.ReactNode | string;
    className?: Argument;
    css?: SideMenuLinkCss;
    current?: boolean;
    icon?: string;
};
export type SideMenuLinkProps = Merge<React.HTMLAttributes<HTMLAnchorElement>, SideMenuLinkBaseProps>;
export declare const SideMenuLink: ({ children, className, css, current, icon, ...props }: SideMenuLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SideMenuLink.d.ts.map