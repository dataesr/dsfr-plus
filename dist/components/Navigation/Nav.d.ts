import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type NavCss = {
    'fr-nav__list'?: Argument;
    "fr-nav__item"?: Argument;
};
export type NavBaseProps = {
    className?: Argument;
    css?: NavCss;
};
export type NavProps = Merge<React.HTMLAttributes<HTMLDivElement>, NavBaseProps>;
export declare const Nav: ({ children, className, css, ...props }: NavProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Nav.d.ts.map