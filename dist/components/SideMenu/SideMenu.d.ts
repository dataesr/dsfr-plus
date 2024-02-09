import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
type SideMenuCss = {
    "fr-sidemenu__inner"?: Argument;
    "fr-sidemenu__btn"?: Argument;
    "fr-sidemenu__title"?: Argument;
    "fr-sidemenu__list"?: Argument;
    "fr-sidemenu__item"?: Argument;
};
export type SideMenuBaseProps = {
    className?: Argument;
    css?: SideMenuCss;
    sticky?: boolean;
    fullHeight?: boolean;
    position?: 'left' | 'right';
    title: string;
};
export type SideMenuProps = Merge<React.HTMLAttributes<HTMLDivElement>, SideMenuBaseProps>;
export declare const SideMenu: ({ children, className, css, fullHeight, position, sticky, title, ...props }: SideMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SideMenu.d.ts.map