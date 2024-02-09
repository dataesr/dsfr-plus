import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
export type ModalTitleProps = Merge<React.HTMLAttributes<HTMLHeadingElement>, {
    icon?: string;
    className?: Argument;
}>;
export declare const ModalTitle: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLHeadingElement>, "className" | "icon"> & {
    icon?: string | undefined;
    className?: Argument;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=ModalTitle.d.ts.map