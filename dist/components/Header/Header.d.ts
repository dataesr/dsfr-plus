import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
interface HeaderCss {
    "fr-header__body"?: Argument;
    "fr-header__body-row"?: Argument;
    "fr-header__brand"?: Argument;
    "fr-header__brand-top"?: Argument;
    "fr-header__navbar"?: Argument;
    "fr-btn--search"?: Argument;
    "fr-btn--menu"?: Argument;
    "fr-header__tools"?: Argument;
    "fr-header__search"?: Argument;
    "fr-header__menu"?: Argument;
    "fr-header__menu-links"?: Argument;
}
export type HeaderBaseProps = {
    className?: Argument;
    css?: HeaderCss;
};
export type HeaderProps = Merge<React.HTMLAttributes<HTMLDivElement>, HeaderBaseProps>;
export declare const Header: ({ children, className, css, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map