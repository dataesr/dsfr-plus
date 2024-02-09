import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type NavItemCss = {
    "fr-menu"?: Argument;
    "fr-menu__list"?: Argument;
};
export type NavItemBaseProps = {
    children?: React.ReactNode[] | React.ReactNode;
    className?: Argument;
    css?: NavItemCss;
    current?: boolean;
    title: string;
};
export type NavItemProps = Merge<React.HTMLAttributes<HTMLButtonElement>, NavItemBaseProps>;
export declare const NavItem: ({ children, className, current, css, title, ...props }: NavItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NavItem.d.ts.map