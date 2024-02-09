import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type RadioCss = {
    "fr-label"?: Argument;
    "fr-hint-text"?: Argument;
    "fr-radio-rich__img"?: Argument;
};
type RadioBaseProps = {
    className?: Argument;
    css?: RadioCss;
    hint?: string;
    id?: string;
    label?: string;
    imageComponent?: React.ReactNode;
};
export type RadioProps = Merge<React.HTMLAttributes<HTMLInputElement>, RadioBaseProps>;
export declare const Radio: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLInputElement>, keyof RadioBaseProps> & RadioBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Radio.d.ts.map