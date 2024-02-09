import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type ToggleCss = {
    "fr-toggle__input"?: Argument;
    "fr-toggle__label"?: Argument;
    "fr-hint-text"?: Argument;
};
export type ToggleProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, {
    className?: Argument;
    css?: ToggleCss;
    hasSeparator?: string;
    hasLabelLeft?: string;
    label?: string;
    id?: string;
    hint?: string;
}>;
export declare const Toggle: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "label" | "className" | "css" | "id" | "hint" | "hasSeparator" | "hasLabelLeft"> & {
    className?: Argument;
    css?: ToggleCss | undefined;
    hasSeparator?: string | undefined;
    hasLabelLeft?: string | undefined;
    label?: string | undefined;
    id?: string | undefined;
    hint?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Toggle.d.ts.map