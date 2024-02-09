import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
type SideMenuItemCss = {
    "fr-sidemenu__link"?: Argument;
    "fr-sidemenu__list"?: Argument;
    "fr-sidemenu__item"?: Argument;
};
export type SideMenuItemBaseProps = {
    className?: Argument;
    css?: SideMenuItemCss;
    current?: boolean;
    defaultExpanded: boolean;
    href?: string;
    icon?: string;
    title: React.ReactNode | string;
};
export type SideMenuItemProps = Merge<React.HTMLAttributes<HTMLButtonElement>, SideMenuItemBaseProps>;
export declare const SideMenuItem: ({ children, className, css, current, defaultExpanded, href, icon, title, ...props }: SideMenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SideMenuItem.d.ts.map