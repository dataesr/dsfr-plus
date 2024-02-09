import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type BaseLinkProps = {
    className?: Argument;
    size?: "sm" | "md" | "lg";
    icon?: string;
    iconPosition?: "left" | "right";
    isSimple?: boolean;
    current?: boolean;
};
export type LinkProps = Merge<React.AnchorHTMLAttributes<HTMLAnchorElement>, BaseLinkProps>;
export declare const Link: import("react").ForwardRefExoticComponent<Omit<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseLinkProps> & BaseLinkProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=Link.d.ts.map